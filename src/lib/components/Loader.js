// Packages
import React from "react"
import styled, { keyframes } from "styled-components"

// Components
import * as Variables from "./Variables"

// Styles
const Rotation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const Container = styled.span`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border: ${props => `${props.border}px`} solid
        ${props =>
            props.backgroundcolor === "primary"
                ? Variables.Colors.Primary500
                : props.backgroundcolor === "secondary"
                ? Variables.Colors.Secondary500
                : props.backgroundcolor === "success"
                ? Variables.Colors.Success500
                : props.backgroundcolor === "danger"
                ? Variables.Colors.Danger500
                : props.backgroundcolor === "warning"
                ? Variables.Colors.Warning500
                : props.backgroundcolor === "white"
                ? Variables.Colors.White
                : props.backgroundcolor};
    border-bottom-color: ${props =>
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
            : props.color};
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Rotation} 1s linear infinite;
    margin-right: ${Variables.Margins.XS};
`

function Loader(props) {
    return (
        <Container
            border={props.border || 2}
            color={props.color || "primary"}
            backgroundcolor={props.backgroundcolor || "white"}
            size={props.size || 48}
        />
    )
}

export default Loader
