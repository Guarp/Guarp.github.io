class JSRunnerExtension {
    constructor() {
        // 保存用户自定义方法，格式为：
        // { 方法名: { args: [参数名数组], code: 函数体字符串 } }
        this.userMethods = {};
        // 用于检测嵌套调用深度，防止无限递归
        this._callDepth = 0;
        this._maxCallDepth = 10;
    }

    getInfo() {
        return {
            id: 'jsRunnerExtension',
            name: 'JS 代码执行扩展',
            blocks: [
                {
                    opcode: 'runExpression',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '运行 JS 表达式 [EXPR] 并返回结果',
                    arguments: {
                        EXPR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '1 + 2'
                        }
                    }
                },
                {
                    opcode: 'runCode',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '执行 JS 代码 [CODE]',
                    arguments: {
                        CODE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'console.log("Hello")'
                        }
                    }
                },
                {
                    opcode: 'defineMethod',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '定义方法 [NAME]，参数 [ARGS]，代码 [CODE]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '我的方法'
                        },
                        ARGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'a, b'
                        },
                        CODE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'return a + b;'
                        }
                    }
                },
                {
                    opcode: 'callMethod',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '调用方法 [NAME]，传参数 [ARGS] 并返回结果',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '我的方法'
                        },
                        ARGS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '3, 4'
                        }
                    }
                },
                {
                    opcode: 'getMethodList',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '获取所有方法名称'
                },
                {
                    opcode: 'deleteMethod',
                    blockType: Scratch.BlockType.COMMAND,
                    text: '删除方法 [NAME]',
                    arguments: {
                        NAME: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '我的方法'
                        }
                    }
                }
            ]
        };
    }

    // 运行表达式，并返回结果
    runExpression(args) {
        const expr = args.EXPR;
        try {
            // 通过 new Function 来计算表达式（加上 "use strict" 保证更严谨）
            const result = Function('"use strict"; return (' + expr + ')')();
            return result;
        } catch (e) {
            console.warn('运行表达式出错:', e);
            return `[错误] ${e.message}`;
        }
    }

    // 执行一段 JS 代码，不返回值
    runCode(args) {
        const code = args.CODE;
        try {
            Function('"use strict"; ' + code)();
        } catch (e) {
            console.warn('执行代码出错:', e);
        }
    }

    // 定义一个用户方法，保存方法名、参数和代码体
    defineMethod(args) {
        const name = args.NAME;
        const argStr = args.ARGS;
        const code = args.CODE;
        // 将参数字符串按逗号分隔，去除空格
        const argList = argStr ? argStr.split(',').map(s => s.trim()).filter(s => s.length > 0) : [];
        if (!name) {
            console.warn('方法名称不能为空');
            return;
        }
        this.userMethods[name] = { args: argList, code: code };
    }

    // 调用用户自定义的方法，并返回执行结果
    callMethod(args) {
        const name = args.NAME;
        const argStr = args.ARGS;
        const method = this.userMethods[name];
        if (!method) {
            return `[错误] 方法 "${name}" 未定义`;
        }
        // 解析传入参数，以逗号分隔
        const argValues = argStr ? argStr.split(',').map(s => s.trim()) : [];

        // 检查嵌套调用深度
        if (this._callDepth >= this._maxCallDepth) {
            return `[错误] 嵌套调用超过最大深度`;
        }

        // 构造用于执行的函数参数列表，同时增加一个额外参数 "调用" 用于支持嵌套调用
        const params = method.args.slice(); // 复制参数数组
        params.push('调用'); // 注入嵌套调用函数

        let fn;
        try {
            fn = Function(...params, '"use strict";' + method.code);
        } catch (e) {
            return `[错误] 函数编译错误: ${e.message}`;
        }
        // 定义辅助函数，用户在自定义方法内可调用，用于嵌套调用其他方法
        const nestedCall = (...callArgs) => {
            // 第一个参数必须为方法名，剩余为参数
            const nestedName = callArgs[0];
            const nestedParams = callArgs.slice(1);
            return this._callUserMethod(nestedName, nestedParams);
        };

        // 执行用户定义的函数
        this._callDepth++;
        let result;
        try {
            // 将参数展开，最后一个参数传入嵌套调用辅助函数
            result = fn(...argValues, nestedCall);
        } catch (e) {
            result = `[错误] ${e.message}`;
        }
        this._callDepth--;
        return result;
    }

    // 内部方法，用于实现嵌套调用
    _callUserMethod(name, params) {
        const method = this.userMethods[name];
        if (!method) {
            throw new Error(`方法 "${name}" 未定义`);
        }
        // 通过数组中的参数传值，确保每个都转为字符串
        const args = params.map(p => p);
        // 构造函数，最后注入 "调用" 参数以支持更深嵌套
        const paramList = method.args.slice();
        paramList.push('调用');
        let fn;
        try {
            fn = Function(...paramList, '"use strict";' + method.code);
        } catch (e) {
            throw new Error(`函数编译错误: ${e.message}`);
        }
        if (this._callDepth >= this._maxCallDepth) {
            throw new Error('嵌套调用超过最大深度');
        }
        this._callDepth++;
        const result = fn(...args, this._callUserMethod.bind(this));
        this._callDepth--;
        return result;
    }

    // 返回所有已定义方法的名称，以逗号分隔的字符串
    getMethodList() {
        return Object.keys(this.userMethods).join(', ');
    }

    // 删除指定名称的方法
    deleteMethod(args) {
        const name = args.NAME;
        if (this.userMethods[name]) {
            delete this.userMethods[name];
        }
    }
}

// 注册扩展到 Scratch/TurboWarp
Scratch.extensions.register(new JSRunnerExtension());
