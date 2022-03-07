// Packages
import React from "react"

import * as Font from "../components/Font"
import Variables from "../components/Variables"
import Toast from "../components/Toast"

const ToastPage = () => {
    return (
        <>
            <Font.H2>Title only</Font.H2>
            <Toast title="Title" />

            <Font.H2>Title and body</Font.H2>
            <Toast title="Title">Message</Toast>

            <Font.H2>Title with icon</Font.H2>
            <Toast
                title="Title"
                icon="check-circle"
                iconColor={Variables.Colors.Success500}
            >
                Message
            </Toast>

            <Font.H2>Title with close button</Font.H2>
            <Toast
                title="Title"
                icon="check-circle"
                iconColor={Variables.Colors.Success500}
                close
            >
                Message
            </Toast>
        </>
    )
}

export default ToastPage

