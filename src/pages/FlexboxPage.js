// Packages
import React from "react"

import Flexbox from "../components/Flexbox"
import InputCheck from "../components/InputCheck"
import Variables from "../components/Variables"

const FlexboxPage = () => {
    return (
        <Flexbox gap={Variables.Spacers.XS} direction="row">
            <InputCheck
                label="Selector"
                id="selector-1"
                name="selector"
                type="checkbox"
                selector
            />

            <InputCheck
                label="Selector"
                id="selector-2"
                name="selector"
                type="checkbox"
                selector
            />

            <InputCheck
                label="Selector"
                id="selector-3"
                name="selector"
                type="checkbox"
                selector
            />
        </Flexbox>
    )
}

export default FlexboxPage
