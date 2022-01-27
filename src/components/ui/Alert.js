// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Grid from "../layouts/Grid"

// Styles
const Container = styled(Grid)`
    padding: ${Variables.Margins.S};
    background-color: ${props =>
        props.color === "primary"
            ? Variables.Colors.Primary50
            : props.color === "secondary"
            ? Variables.Colors.Secondary50
            : props.color === "success"
            ? Variables.Colors.Success50
            : props.color === "danger"
            ? Variables.Colors.Danger50
            : props.color === "warning"
            ? Variables.Colors.Warning50
            : props.color === "white"
            ? Variables.Colors.White
            : props.color};
    border: 1px solid
        ${props =>
            props.color === "primary"
                ? Variables.Colors.Primary500
                : props.color === "secondary"
                ? Variables.Colors.Secondary500
                : props.color === "success"
                ? Variables.Colors.Success500
                : props.color === "danger"
                ? Variables.Colors.Danger500
                : props.color === "warning"
                ? Variables.Colors.Warning500
                : props.color === "white"
                ? Variables.Colors.White
                : props.bordercolor};
    border-radius: ${Variables.Radiuses.M};
`

function Alert(props) {
    return (
        <Container
            col={1}
            gap={Variables.Margins.S}
            color={props.color || "success"}
            bordercolor={props.bordercolor}
            {...props}
        >
            {props.children}
        </Container>
    )
}

export default Alert
