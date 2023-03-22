(function(Scratch) {
  'use strict';
  class WebPage {
    getInfo() {
    return {
      id: 'WebPage',
      name: '网页',
      color1: '#ff8000',
      color2: '#804000',
      color3: '#804000',
      blocks: [
        {
          opcode: 'aa',
          blockType: Scratch.BlockType.COMMAND,
          text: '打开 [a]',
          arguments: {
            a: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://vdse.bdstatic.com//192d9a98d782d9c74c96f09db9378d93.mp4'
            }
          }
        },{
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'GET [URL]',
            arguments: {
              URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org/hello.txt'
              }
          }
          },

          '---','弹窗',

          {
            blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NS44OTQwNyIgaGVpZ2h0PSI0NS44OTQwNyIgdmlld0JveD0iMCwwLDQ1Ljg5NDA3LDQ1Ljg5NDA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjQ4Nzc1LC0xNTcuMDUyOTcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQ5LjUxNjc4LDE1Ny4wNTMwMWMzLjY3OTg0LC0wLjAwNzk5IDcuMjExMjYsMS40NTAzNiA5LjgxMzIxLDQuMDUyNWMyLjYwMTk1LDIuNjAyMTQgNC4wNjAwNCw2LjEzMzY2IDQuMDUxNzksOS44MTM1djE4LjE2MmMwLjAwODI2LDMuNjgwMDIgLTEuNDQ5OTcsNy4yMTE2OSAtNC4wNTIxNCw5LjgxMzg2Yy0yLjYwMjE3LDIuNjAyMTcgLTYuMTMzODQsNC4wNjA0IC05LjgxMzg2LDQuMDUyMTRoLTE4LjE2MmMtMy42ODAwMiwwLjAwODI2IC03LjIxMTY5LC0xLjQ0OTk3IC05LjgxMzg2LC00LjA1MjE0Yy0yLjYwMjE3LC0yLjYwMjE3IC00LjA2MDQsLTYuMTMzODQgLTQuMDUyMTQsLTkuODEzODZ2LTE4LjE2MmMtMC4wMDgyNiwtMy42ODAzNiAxLjQ1MDI0LC03LjIxMjM0IDQuMDUyODUsLTkuODE0NTdjMi42MDI2LC0yLjYwMjIzIDYuMTM0NzksLTQuMDYwMjIgOS44MTUxNSwtNC4wNTE0M3pNMjQ0LjY3OTc4LDE3My4wNzQwMWw2LjkyNiw2LjkyNmwtNi45MjYsNi45MjZsMy4yNzYsMy4yNzVsMTAuMiwtMTAuMjAxbC0xMC4yLC0xMC4yMDF6TTIyMi43MTU3OCwxODAuMDAwMDFsMTAuMiwxMC4ybDMuMjc2LC0zLjI3NGwtNi45MjYsLTYuOTI2bDYuODUyLC02Ljg1bC0zLjI3OCwtMy4yNzh6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41MTM3MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiLz48cGF0aCBkPSJNMjIxLjMwNDM1LDE5NC40NTY1MnYtMjguOTEzMDRoMzguMjYwODd2MjguOTEzMDR6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGcgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjI2LjgwNTIyLDE3Mi42NzUzMXYtNS4wNzg5NmgxMy4yMDAwM3Y1LjA3ODk2eiIvPjxwYXRoIGQ9Ik0yMjYuODA1MjIsMTg3LjI3OTU5di0xNC41OTg3aDUuODU2OTd2MTQuNTk4N3oiLz48cGF0aCBkPSJNMjUzLjE5NDc4LDE4Ny4zMjQ2OXY1LjA3ODk2aC0xMy4yMDAwM3YtNS4wNzg5NnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI1My4xOTQ3OCwxNzIuNzIwNDF2MTQuNTk4N2gtNS44NTY5N3YtMTQuNTk4N3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
            opcode: 'Alert1',
            blockType: Scratch.BlockType.COMMAND,
            text: '警告 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '文本'
              },
            }
          },{
            blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NS44OTQwNyIgaGVpZ2h0PSI0NS44OTQwNyIgdmlld0JveD0iMCwwLDQ1Ljg5NDA3LDQ1Ljg5NDA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjQ4Nzc1LC0xNTcuMDUyOTcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQ5LjUxNjc4LDE1Ny4wNTMwMWMzLjY3OTg0LC0wLjAwNzk5IDcuMjExMjYsMS40NTAzNiA5LjgxMzIxLDQuMDUyNWMyLjYwMTk1LDIuNjAyMTQgNC4wNjAwNCw2LjEzMzY2IDQuMDUxNzksOS44MTM1djE4LjE2MmMwLjAwODI2LDMuNjgwMDIgLTEuNDQ5OTcsNy4yMTE2OSAtNC4wNTIxNCw5LjgxMzg2Yy0yLjYwMjE3LDIuNjAyMTcgLTYuMTMzODQsNC4wNjA0IC05LjgxMzg2LDQuMDUyMTRoLTE4LjE2MmMtMy42ODAwMiwwLjAwODI2IC03LjIxMTY5LC0xLjQ0OTk3IC05LjgxMzg2LC00LjA1MjE0Yy0yLjYwMjE3LC0yLjYwMjE3IC00LjA2MDQsLTYuMTMzODQgLTQuMDUyMTQsLTkuODEzODZ2LTE4LjE2MmMtMC4wMDgyNiwtMy42ODAzNiAxLjQ1MDI0LC03LjIxMjM0IDQuMDUyODUsLTkuODE0NTdjMi42MDI2LC0yLjYwMjIzIDYuMTM0NzksLTQuMDYwMjIgOS44MTUxNSwtNC4wNTE0M3pNMjQ0LjY3OTc4LDE3My4wNzQwMWw2LjkyNiw2LjkyNmwtNi45MjYsNi45MjZsMy4yNzYsMy4yNzVsMTAuMiwtMTAuMjAxbC0xMC4yLC0xMC4yMDF6TTIyMi43MTU3OCwxODAuMDAwMDFsMTAuMiwxMC4ybDMuMjc2LC0zLjI3NGwtNi45MjYsLTYuOTI2bDYuODUyLC02Ljg1bC0zLjI3OCwtMy4yNzh6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41MTM3MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiLz48cGF0aCBkPSJNMjIxLjMwNDM1LDE5NC40NTY1MnYtMjguOTEzMDRoMzguMjYwODd2MjguOTEzMDR6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGcgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjI2LjgwNTIyLDE3Mi42NzUzMXYtNS4wNzg5NmgxMy4yMDAwM3Y1LjA3ODk2eiIvPjxwYXRoIGQ9Ik0yMjYuODA1MjIsMTg3LjI3OTU5di0xNC41OTg3aDUuODU2OTd2MTQuNTk4N3oiLz48cGF0aCBkPSJNMjUzLjE5NDc4LDE4Ny4zMjQ2OXY1LjA3ODk2aC0xMy4yMDAwM3YtNS4wNzg5NnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI1My4xOTQ3OCwxNzIuNzIwNDF2MTQuNTk4N2gtNS44NTY5N3YtMTQuNTk4N3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
            opcode: 'Alert3',
            blockType: Scratch.BlockType.REPORTER,
            text: '询问 [a] 并获取输入',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '文本'
              },
            }
          },{
            blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NS44OTQwNyIgaGVpZ2h0PSI0NS44OTQwNyIgdmlld0JveD0iMCwwLDQ1Ljg5NDA3LDQ1Ljg5NDA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjQ4Nzc1LC0xNTcuMDUyOTcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQ5LjUxNjc4LDE1Ny4wNTMwMWMzLjY3OTg0LC0wLjAwNzk5IDcuMjExMjYsMS40NTAzNiA5LjgxMzIxLDQuMDUyNWMyLjYwMTk1LDIuNjAyMTQgNC4wNjAwNCw2LjEzMzY2IDQuMDUxNzksOS44MTM1djE4LjE2MmMwLjAwODI2LDMuNjgwMDIgLTEuNDQ5OTcsNy4yMTE2OSAtNC4wNTIxNCw5LjgxMzg2Yy0yLjYwMjE3LDIuNjAyMTcgLTYuMTMzODQsNC4wNjA0IC05LjgxMzg2LDQuMDUyMTRoLTE4LjE2MmMtMy42ODAwMiwwLjAwODI2IC03LjIxMTY5LC0xLjQ0OTk3IC05LjgxMzg2LC00LjA1MjE0Yy0yLjYwMjE3LC0yLjYwMjE3IC00LjA2MDQsLTYuMTMzODQgLTQuMDUyMTQsLTkuODEzODZ2LTE4LjE2MmMtMC4wMDgyNiwtMy42ODAzNiAxLjQ1MDI0LC03LjIxMjM0IDQuMDUyODUsLTkuODE0NTdjMi42MDI2LC0yLjYwMjIzIDYuMTM0NzksLTQuMDYwMjIgOS44MTUxNSwtNC4wNTE0M3pNMjQ0LjY3OTc4LDE3My4wNzQwMWw2LjkyNiw2LjkyNmwtNi45MjYsNi45MjZsMy4yNzYsMy4yNzVsMTAuMiwtMTAuMjAxbC0xMC4yLC0xMC4yMDF6TTIyMi43MTU3OCwxODAuMDAwMDFsMTAuMiwxMC4ybDMuMjc2LC0zLjI3NGwtNi45MjYsLTYuOTI2bDYuODUyLC02Ljg1bC0zLjI3OCwtMy4yNzh6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41MTM3MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiLz48cGF0aCBkPSJNMjIxLjMwNDM1LDE5NC40NTY1MnYtMjguOTEzMDRoMzguMjYwODd2MjguOTEzMDR6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGcgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjI2LjgwNTIyLDE3Mi42NzUzMXYtNS4wNzg5NmgxMy4yMDAwM3Y1LjA3ODk2eiIvPjxwYXRoIGQ9Ik0yMjYuODA1MjIsMTg3LjI3OTU5di0xNC41OTg3aDUuODU2OTd2MTQuNTk4N3oiLz48cGF0aCBkPSJNMjUzLjE5NDc4LDE4Ny4zMjQ2OXY1LjA3ODk2aC0xMy4yMDAwM3YtNS4wNzg5NnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI1My4xOTQ3OCwxNzIuNzIwNDF2MTQuNTk4N2gtNS44NTY5N3YtMTQuNTk4N3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
            opcode: 'Alert4',
            blockType: Scratch.BlockType.REPORTER,
            text: '询问 [a] 并获取输入，默认值[b]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '文本'
              },
              b: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '文本'
              },
            }
          },{
            blockIconURI: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NS44OTQwNyIgaGVpZ2h0PSI0NS44OTQwNyIgdmlld0JveD0iMCwwLDQ1Ljg5NDA3LDQ1Ljg5NDA3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE3LjQ4Nzc1LC0xNTcuMDUyOTcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjQ5LjUxNjc4LDE1Ny4wNTMwMWMzLjY3OTg0LC0wLjAwNzk5IDcuMjExMjYsMS40NTAzNiA5LjgxMzIxLDQuMDUyNWMyLjYwMTk1LDIuNjAyMTQgNC4wNjAwNCw2LjEzMzY2IDQuMDUxNzksOS44MTM1djE4LjE2MmMwLjAwODI2LDMuNjgwMDIgLTEuNDQ5OTcsNy4yMTE2OSAtNC4wNTIxNCw5LjgxMzg2Yy0yLjYwMjE3LDIuNjAyMTcgLTYuMTMzODQsNC4wNjA0IC05LjgxMzg2LDQuMDUyMTRoLTE4LjE2MmMtMy42ODAwMiwwLjAwODI2IC03LjIxMTY5LC0xLjQ0OTk3IC05LjgxMzg2LC00LjA1MjE0Yy0yLjYwMjE3LC0yLjYwMjE3IC00LjA2MDQsLTYuMTMzODQgLTQuMDUyMTQsLTkuODEzODZ2LTE4LjE2MmMtMC4wMDgyNiwtMy42ODAzNiAxLjQ1MDI0LC03LjIxMjM0IDQuMDUyODUsLTkuODE0NTdjMi42MDI2LC0yLjYwMjIzIDYuMTM0NzksLTQuMDYwMjIgOS44MTUxNSwtNC4wNTE0M3pNMjQ0LjY3OTc4LDE3My4wNzQwMWw2LjkyNiw2LjkyNmwtNi45MjYsNi45MjZsMy4yNzYsMy4yNzVsMTAuMiwtMTAuMjAxbC0xMC4yLC0xMC4yMDF6TTIyMi43MTU3OCwxODAuMDAwMDFsMTAuMiwxMC4ybDMuMjc2LC0zLjI3NGwtNi45MjYsLTYuOTI2bDYuODUyLC02Ljg1bC0zLjI3OCwtMy4yNzh6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMS41MTM3MSIgc3Ryb2tlLW1pdGVybGltaXQ9IjQiLz48cGF0aCBkPSJNMjIxLjMwNDM1LDE5NC40NTY1MnYtMjguOTEzMDRoMzguMjYwODd2MjguOTEzMDR6IiBmaWxsPSIjZmY4MDAwIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PGcgZmlsbC1vcGFjaXR5PSIwLjM0OTAyIiBmaWxsPSIjMDAwMDAwIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJNMjI2LjgwNTIyLDE3Mi42NzUzMXYtNS4wNzg5NmgxMy4yMDAwM3Y1LjA3ODk2eiIvPjxwYXRoIGQ9Ik0yMjYuODA1MjIsMTg3LjI3OTU5di0xNC41OTg3aDUuODU2OTd2MTQuNTk4N3oiLz48cGF0aCBkPSJNMjUzLjE5NDc4LDE4Ny4zMjQ2OXY1LjA3ODk2aC0xMy4yMDAwM3YtNS4wNzg5NnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI1My4xOTQ3OCwxNzIuNzIwNDF2MTQuNTk4N2gtNS44NTY5N3YtMTQuNTk4N3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L2c+PC9zdmc+",
            opcode: 'Alert2',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '询问 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '文本'
              },
            }
          },
          
          '---','eval',
          
          {
            opcode: 'eval',
            blockType: Scratch.BlockType.COMMAND,
            text: '运行 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'alert("a");'
              },
            }
          },{
            opcode: 'eval_r',
            blockType: Scratch.BlockType.REPORTER,
            text: '运行 [a]',
            arguments: {
              a: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '5*(2+2)'
              },
            }
          },
        ]
      };
    }
    aa(args) {
      window.open(args.a,'_blank');
    }

    get (args) {
        return fetch(args.URL)
          .then(r => r.text())
          .catch(() => '');
    }

    Alert1(args) {
      alert(args.a);
    }

    Alert2(args) {
    return window.confirm(args.a)
    }

    Alert3(args) {
    return prompt(args.a)
    }

    Alert4(args) {
    return prompt(args.a,args.b)
    }

    eval(args) {
      eval(args.a);
    }

    eval_r(args) {
      return eval(args.a);
    }
  }

  Scratch.extensions.register(new WebPage());
})(Scratch);
