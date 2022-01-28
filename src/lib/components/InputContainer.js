// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "./Variables"
import * as Font from "./Font"
import Grid from "./Grid"

// Styles
const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`

const Counter = styled(Font.Small)``

function InputContainer(props) {
    return (
        <Grid gap={Variables.Margins.XXS}>
            {props.label && <Label>{props.label}</Label>}

            {props.helper && <Font.P>{props.helper}</Font.P>}

            {props.children}

            {props.validationText &&
                props.validation &&
                props.value.length > 0 && (
                    <Font.Small>{props.validationText}</Font.Small>
                )}

            {props.counter && (
                <Counter>
                    {props.value.length} / {props.counter}
                </Counter>
            )}
        </Grid>
    )
}

export default InputContainer
