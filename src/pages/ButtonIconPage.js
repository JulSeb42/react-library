// Packages
import React from "react"

import ButtonIcon from "../components/ButtonIcon"
import Grid from "../components/Grid"

const ButtonIconPage = props => {
    return (
        <Grid gap="8px">
            <ButtonIcon btnStyle="plain" icon="mail" />

            <ButtonIcon btnStyle="transparent" color="secondary" icon="mail" hoverBackground />
        </Grid>
    )
}

export default ButtonIconPage
