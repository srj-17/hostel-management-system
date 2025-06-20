function getMonthStartDate(currentDate) {
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const monthStartDate = new Date(currentYear, currentMonth, 1)
    return monthStartDate
}

function getMonthEndDate(currentDate) {
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const monthEndDate = new Date(currentYear, currentMonth + 1, 0)
    return monthEndDate
}

module.exports = {
    getMonthStartDate,
    getMonthEndDate,
}
