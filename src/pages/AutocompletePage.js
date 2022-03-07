// Packages
import React, { useState, useEffect } from "react"

import * as Font from "../components/Font"
import Autocomplete from "../components/Autocomplete"

import allCities from "../components/allCities.json"

const AutocompletePage = () => {
    // List suggestions
    const [cities, setCities] = useState([])
    const [location, setLocation] = useState("")

    useEffect(() => {
        setCities(allCities.map(city => `${city.name}, ${city.country}`))
    }, [])

    const [filteredCities, setFilteredCities] = useState("")

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = cities.filter(city => {
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

