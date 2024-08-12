function calculateTrueSolarTimeDifference(year, month, day) {
    // 计算积日day
    const daysInMonth = [31, (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayOfYear = day;
    for (let i = 0; i < month - 1; i++) {
        dayOfYear += daysInMonth[i];
    }

    // 计算N0
    const N0 = 79.6764 + 0.2422 * (year - 1985) - Math.floor((year - 1985) / 4);

    // 计算日角θ
    const theta = 2 * Math.PI * (dayOfYear - N0) / 365.2422;

    // 计算真太阳时时差Δt
    const deltaT = 0.0028 
                 - 1.9857 * Math.sin(theta) 
                 + 9.9059 * Math.sin(2 * theta) 
                 - 7.0924 * Math.cos(theta) 
                 - 0.6882 * Math.cos(2 * theta);

    return deltaT;
}

function calculateTrueSolarTime(date, localTime, localLongitude, standardMeridian) {
    // 解析输入的日期和时间
    const [year, month, day] = date.split('-').map(Number);
    const [hour, minute] = localTime.split(':').map(Number);

    // 计算平太阳时时差：每15度经度差异对应1小时时间差
    const longitudeDifference = localLongitude - standardMeridian;
    const timeOffset = (longitudeDifference / 15) * 60; // 偏移量以分钟为单位

    // 将输入的时间转化为分钟数以便计算
    let totalMinutes = hour * 60 + minute;

    // 加上平太阳时时差以获得当地平太阳时的分钟数
    totalMinutes += timeOffset;

    // 计算真平太阳时差
    const deltaT = calculateTrueSolarTimeDifference(year, month, day);

    // 加上真平太阳时差，得到当地真太阳时
    totalMinutes += deltaT;

    // 处理跨天情况
    let newDay = day;
    let newMonth = month;
    let newYear = year;

    if (totalMinutes < 0) {
        // 前一天
        totalMinutes += 1440; // 24小时 * 60分钟
        newDay -= 1;
    } else if (totalMinutes >= 1440) {
        // 后一天
        totalMinutes -= 1440;
        newDay += 1;
    }

    // 计算新的小时和分钟
    const newHour = Math.floor(totalMinutes / 60);
    const newMinute = Math.floor(totalMinutes % 60);

    // 处理跨月情况
    const daysInMonth = new Date(newYear, newMonth, 0).getDate();
    if (newDay > daysInMonth) {
        newDay = 1;
        newMonth += 1;
    } else if (newDay < 1) {
        newMonth -= 1;
        const previousMonthDays = new Date(newYear, newMonth, 0).getDate();
        newDay = previousMonthDays;
    }

    // 处理跨年情况
    if (newMonth > 12) {
        newMonth = 1;
        newYear += 1;
    } else if (newMonth < 1) {
        newMonth = 12;
        newYear -= 1;
    }

    return {
        year: newYear,
        month: newMonth,
        day: newDay,
        hour: newHour,
        minute: newMinute
    };
}