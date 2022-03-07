// Packages
import React, { useState, useEffect } from "react"

import * as Font from "../components/Font"
import Autocomplete from "../components/Autocomplete"

const AutocompletePage = () => {
    // List suggestions
    const [allCities, setAllCities] = useState([])
    const [location, setLocation] = useState("")

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/JulSeb42/js-utils/master/utils/allCities.json"
        )
            .then(res => res.json())
            .then(res =>
                setAllCities(res.map(city => `${city.name}, ${city.country}`))
            )
            .catch(err => console.log(err))
    }, [])

    const [filteredCities, setFilteredCities] = useState("")

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = allCities.filter(city => {
        return city.toLowerCase().includes(filteredCities.toLowerCase())
    })

    const handleClickSuggestion = e => {
        setLocation(e.target.innerText)
    }
    return (
        <>
            <Font.H2>List suggestions</Font.H2>

            <Autocomplete
                label="Location"
                id="location"
                onChange={handleFilterLocation}
                value={location}
                items={resultsCities}
                onMouseDown={handleClickSuggestion}
            />
        </>
    )
}

export default AutocompletePage
