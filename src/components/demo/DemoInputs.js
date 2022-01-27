// Packages
import React, { useState, useEffect } from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Input from "../ui/Input"
import CheckInput from "../ui/CheckInput"
import Grid from "../layouts/Grid"
import ListSuggestions from "../ui/ListSuggestions"
import InputImage from "../ui/InputImage"

// Data
import allCities from "./cities.json"

// Styles
const Container = styled(Grid)`
    width: 400px;
    margin: 0 auto;
`

function DemoInputs(props) {
    const [validation, setValidation] = useState("not-passed")
    const [inputValidate, setInputValidate] = useState("e")

    const [validationPassword, setValidationPassword] = useState("not-passed")
    const [password, setPassword] = useState("e")

    const [markdown, setMarkdown] = useState("")

    const handleValidation = e => {
        setInputValidate(e.target.value)

        if (e.target.value.length > 6) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    const handlePassword = e => {
        setPassword(e.target.value)

        if (e.target.value.length > 6) {
            setValidationPassword("passed")
        } else {
            setValidationPassword("not-passed")
        }
    }

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

    // Input image
    const [image, setImage] = useState("")

    const handleImage = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setImage(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <Container gap={Variables.Margins.XL}>
            <Grid gap={Variables.Margins.S}>
                <Font.H2>Text inputs</Font.H2>

                <Input id="input" />

                <Input id="input-password" password />

                <Input label="Label" helper="Helper" id="input-label" />

                <Input icon="mail" id="input-icon" />

                <Input id="input-disabled" disabled value="disabled" />

                <Input
                    label="Input with validation"
                    id="input-validation"
                    validationText="Text validation"
                    onChange={handleValidation}
                    validation={validation}
                    value={inputValidate}
                />

                <Input
                    id="input-validation-password"
                    validationText="Text validation"
                    onChange={handlePassword}
                    validation={validationPassword}
                    value={password}
                    password
                />

                <Input
                    type="textarea"
                    label="Textarea"
                    id="textarea"
                    value=""
                    counter={140}
                />

                <Input type="select" label="Select" id="select">
                    <option>1</option>
                </Input>

                <Input
                    type="markdown"
                    label="Markdown"
                    id="markdown"
                    onChange={setMarkdown}
                    value={markdown}
                />
            </Grid>

            <Grid gap={Variables.Margins.S}>
                <Font.H2>Check inputs</Font.H2>

                <Grid gap={Variables.Margins.XXS}>
                    <CheckInput
                        label="Checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        justify="start"
                        name="checkbox"
                    />

                    <CheckInput
                        label="Checkbox"
                        id="checkbox-2"
                        type="checkbox"
                        defaultChecked={true}
                        justify="start"
                        name="checkbox"
                    />

                    <CheckInput
                        label="Checkbox"
                        id="checkbox-1"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />

                    <CheckInput
                        label="Checkbox"
                        id="checkbox-2"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="checkbox-disabled"
                    />
                </Grid>

                <Grid gap={Variables.Margins.XXS}>
                    <CheckInput
                        label="Radio"
                        id="radio-1"
                        type="radio"
                        justify="start"
                        name="radio"
                    />

                    <CheckInput
                        label="Radio"
                        id="radio-2"
                        type="radio"
                        defaultChecked={true}
                        justify="start"
                        name="radio"
                    />

                    <CheckInput
                        label="Radio"
                        id="radio-1"
                        type="radio"
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />

                    <CheckInput
                        label="Radio"
                        id="radio-2"
                        type="radio"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="radio-disabled"
                    />
                </Grid>

                <Grid gap={Variables.Margins.XXS}>
                    <CheckInput
                        label="Toggle"
                        id="toggle-1"
                        type="checkbox"
                        justify="start"
                        name="toggle"
                        toggle
                    />

                    <CheckInput
                        label="Toggle"
                        id="toggle-2"
                        type="checkbox"
                        defaultChecked={true}
                        justify="start"
                        name="toggle"
                        toggle
                    />

                    <CheckInput
                        label="Toggle"
                        id="toggle-1"
                        type="checkbox"
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />

                    <CheckInput
                        label="Toggle"
                        id="toggle-2"
                        type="checkbox"
                        defaultChecked={true}
                        disabled
                        justify="start"
                        name="toggle-disabled"
                        toggle
                    />
                </Grid>
            </Grid>

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

            <Grid gap={Variables.Margins.S}>
                <Font.H2>Input image</Font.H2>

                <InputImage
                    label="Image"
                    src={image}
                    alt="Alt"
                    onChange={e => handleImage(e)}
                    id="image"
                />
            </Grid>
        </Container>
    )
}

export default DemoInputs
