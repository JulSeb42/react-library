// Packages
import React from "react"

import * as Font from "../components/Font"
import TitleFlex from "../components/TitleFlex"
import Button from "../components/Button"

const TitleFlexPage = () => {
    return (
        <TitleFlex>
            <Font.H2>Title</Font.H2>

            <Button btnStyle="plain" color="primary">
                Button
            </Button>
        </TitleFlex>
    )
}

export default TitleFlexPage

