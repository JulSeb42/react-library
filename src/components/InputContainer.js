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

const Helper = styled(Font.P)`
    position: relative;
    z-index: 0;
`

const InputContainer = props => {
    return (
        <Grid gap={Variables.Spacers.XXS}>
            {props.label && <Label htmlFor={props.id}>{props.label}</Label>}

            {props.helper && <Helper>{props.helper}</Helper>}

            {props.children}

            {props.helperBottom && (
                <Helper as={Font.Small}>{props.helperBottom}</Helper>
            )}

            {props.validationText &&
                props.validation &&
                props.value.length > 0 && (
                    <Font.Small>{props.validationText}</Font.Small>
                )}

            {(props.counter || props.maxLength) && (
                <Counter>
                    {props.value.length}
                    {props.maxLength && ` / ${props.maxLength}`}
                </Counter>
            )}
        </Grid>
    )
}

export default InputContainer
