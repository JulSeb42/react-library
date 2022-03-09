// Packages
import React, { useState } from "react"

import * as Font from "../components/Font"
import Grid from "../components/Grid"
import Variables from "../components/Variables"
import Input from "../components/Input"

const InputPage = () => {
    // Validation
    const [validation, setValidation] = useState("not-passed")
    const [inputValidate, setInputValidate] = useState("e")

    const handleValidation = e => {
        setInputValidate(e.target.value)

        if (e.target.value.length > 6) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    // Password & validation
    const [validationPassword, setValidationPassword] = useState("not-passed")
    const [password, setPassword] = useState("e")

    const handlePassword = e => {
        setPassword(e.target.value)

        if (e.target.value.length > 6) {
            setValidationPassword("passed")
        } else {
            setValidationPassword("not-passed")
        }
    }

    // Counter
    const [text, setText] = useState("")
    const handleText = e => setText(e.target.value)

    // Markdown
    const [markdown, setMarkdown] = useState("")

    return (
        <>
            <Font.H2>Text inputs</Font.H2>
            <Grid gap={Variables.Spacers.S}>
                <Input id="input" />
                <Input id="input-password" password iconPassword />
                <Input label="Label" helper="Helper" id="input-label" />
                <Input label="Label" helperBottom="Helper" id="input-label-helper" />
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
                    value={text}
                    onChange={handleText}
                    counter
                    maxLength={140}
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
        </>
    )
}

export default InputPage

