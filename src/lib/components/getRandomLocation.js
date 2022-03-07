import allCities from "./allCities.json"

const getRandomLocation = () => {
    const randomNumber = Math.floor(Math.random() * allCities.length)
    return `${allCities[randomNumber].name}, ${allCities[randomNumber].country}`
}

export default getRandomLocation
