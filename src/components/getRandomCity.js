import allCities from "./allCities.json"
import { capitalize } from "js-utils-julseb"

const getRandomCity = country => {
    const filteredArr = allCities.filter(
        city => city.country.toLowerCase() === country.toLowerCase()
    )
    const randomNumber = Math.floor(Math.random() * allCities.length)
    const randomNumberFiltered = Math.floor(Math.random() * filteredArr.length)

    if (country === "all") {
        return `${allCities[randomNumber].name}, ${allCities[randomNumber].country}`
    } else {
        return `${allCities[randomNumberFiltered].name}, ${capitalize(country)}`
    }
}

export default getRandomCity
