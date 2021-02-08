const dateObjToStr = (dateObj) => {
    const hours = dateObj.getHours()
    const minutes = dateObj.getMinutes()
    const day = dateObj.getDay()
    const date = dateObj.getDate()
    const month = dateObj.getMonth()
    const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    const days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
    return `created on ${days[day]} ${months[month]} ${day} at ${hours}hrs ${minutes}min`
}

module.exports = dateObjToStr;