// Packages
import React from "react"
import styled, { keyframes, css } from "styled-components"

// Components
import Variables from "./Variables"

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
            props.backgroundColor === "primary"
                ? Variables.Colors.Primary500
                : props.backgroundColor === "secondary"
                ? Variables.Colors.Secondary500
                : props.backgroundColor === "success"
                ? Variables.Colors.Success500
                : props.backgroundColor === "danger"
                ? Variables.Colors.Danger500
                : props.backgroundColor === "warning"
                ? Variables.Colors.Warning500
                : props.backgroundColor === "white"
                ? Variables.Colors.White
                : props.backgroundColor};
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

    ${props =>
        (props.marginLeft || props.marginRight) &&
        css`
            margin-left: ${props.marginLeft};
            margin-right: ${props.marginRight};
        `}
`

const Loader = props => {
    return (
        <Container
            border={props.border || 2}
            color={props.color || "primary"}
            backgroundColor={props.backgroundColor || "white"}
            size={props.size || 48}
            {...props}
        />
    )
}

export default Loader
