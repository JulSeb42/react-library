// Packages
import React from "react"

import ButtonsContainer from "../components/ButtonsContainer"
import Button from "../components/Button"

const ButtonsContainerPage = () => {
    return (
        <ButtonsContainer>
            <Button btnStyle="plain" color="primary" justify="start">
                Button
            </Button>
            <Button btnStyle="text" color="primary" justify="start">
                Button
            </Button>
        </ButtonsContainer>
    )
}

export default ButtonsContainerPage

