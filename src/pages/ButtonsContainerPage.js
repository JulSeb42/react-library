// Packages
import React from "react"

import ButtonsContainer from "../components/ButtonsContainer"
import Button from "../components/Button"

const ButtonsContainerPage = () => {
    return (
        <ButtonsContainer>
            <Button btnstyle="plain" color="primary" justify="start">
                Button
            </Button>
            <Button btnstyle="text" color="primary" justify="start">
                Button
            </Button>
        </ButtonsContainer>
    )
}

export default ButtonsContainerPage

