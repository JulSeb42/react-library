const getRandomDate = (minYear, maxYear) => {
    let day = Math.floor(Math.random() * (30 - 1)) + 1
    let month = Math.floor(Math.random() * (12 - 1)) + 1
    let year = Math.floor(Math.random() * (maxYear - minYear + 1) + minYear)

    if (day < 10) {
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }

    if (month === "02") {
        day = Math.floor(Math.random() * (28 - 1)) + 1
    }

    return `${year}-${month}-${day}`
}

export default getRandomDate
