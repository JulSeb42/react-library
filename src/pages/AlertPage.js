// Packages
import React from "react"

import * as Font from "../components/Font"
import Alert from "../components/Alert"

const AlertPage = () => {
    return (
        <>
            <Alert color="success">
                <Font.P>Content</Font.P>
            </Alert>

            <Alert color="danger">
                <Font.P>Content</Font.P>
            </Alert>
        </>
    )
}

export default AlertPage

