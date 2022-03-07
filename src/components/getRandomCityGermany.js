import citiesGermany from "./citiesGermany.json"

const getRandomCityGermany = () => {
    const randomNumber = Math.floor(Math.random() * citiesGermany.length)
    return citiesGermany[randomNumber].name
}

export default getRandomCityGermany
