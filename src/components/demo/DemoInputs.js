// Packages
import React, { useState } from "react"
import styled from "styled-components"

// Components
import Variables from "../Variables"
import Input from "../Input"
import Grid from "../Grid"
import InputImage from "../InputImage"

// Styles
const Container = styled(Grid)`
    width: 400px;
    margin: 0 auto;
`

function DemoInputs(props) {
    return <Container gap={Variables.Margins.XL}>{props.children}</Container>
}

export default DemoInputs

export function DemoValidate() {
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

    return (
        <Input
            label="Input with validation"
            id="input-validation"
            validationText="Text validation"
            onChange={handleValidation}
            validation={validation}
            value={inputValidate}
        />
    )
}

export function DemoPassword() {
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

    return (
        <Input
            id="input-validation-password"
            validationText="Text validation"
            onChange={handlePassword}
            validation={validationPassword}
            value={password}
            password
        />
    )
}

export function DemoCounter() {
    const [text, setText] = useState("")
    const handleText = e => setText(e.target.value)

    return (
        <Input
            type="textarea"
            label="Textarea"
            id="textarea"
            value={text}
            onChange={handleText}
            counter={140}
        />
    )
}

export function DemoMarkdown() {
    const [markdown, setMarkdown] = useState("")

    return (
        <Input
            type="markdown"
            label="Markdown"
            id="markdown"
            onChange={setMarkdown}
            value={markdown}
        />
    )
}

export function DemoImage() {
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
        <InputImage
            label="Image"
            src={image}
            alt="Alt"
            onChange={e => handleImage(e)}
            id="image"
        />
    )
}

export function DemoInputText() {
    const [text, setText] = useState("")
    const handleText = e => setText(e.target.value)
    return (
        <Input label="Test text" onChange={handleText} value={text} />
    )
}