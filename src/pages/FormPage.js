// Packages
import React from "react"

import Form from "../components/Form"
import Input from "../components/Input"

const FormPage = () => {
    return (
        <Form btnprimary="Send" btncancel="/">
            <Input label="Name" />

            <Input label="Password" password />
        </Form>
    )
}

export default FormPage

