// Packages
import React, { useEffect, useState } from "react"

import * as Variables from "../Variables"
import * as Font from "../Font"
import Grid from "../Grid"
import ListSuggestions from "../ListSuggestions"

// Data
import allCities from "./cities.json"

function DemoSuggestions(props) {
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
        <Grid gap={Variables.Margins.S}>
            <Font.H2>List suggestions</Font.H2>

            <ListSuggestions
                label="Location"
                id="location"
                onChange={handleFilterLocation}
                value={location}
                items={resultsCities}
                onMouseDown={handleClickSuggestion}
            />
        </Grid>
    )
}

export default DemoSuggestions