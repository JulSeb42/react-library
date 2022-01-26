// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "./Icon"

// Styles
const Container = styled.span`
    display: inline-flex;
    align-items: center;
    transition: ${Variables.Transitions.Short};
    padding: ${Variables.Margins.XXS} ${Variables.Margins.S};
    border-radius: ${props =>
        props.pill ? Variables.Radiuses.Round : Variables.Radiuses.M};

    background-color: ${props =>
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
            : props.color === "disabled"
            ? Variables.Colors.Gray100
            : props.color};

    color: ${props =>
        props.color === "white"
            ? Variables.Colors.Primary500
            : props.color === "disabled"
            ? Variables.Colors.Gray500
            : Variables.Colors.White};

    ${props =>
        props.select &&
        css`
            cursor: ${props =>
                props.color === "disabled" ? "not-allowed" : "pointer"};

            &:hover {
                background-color: ${props =>
                    props.color === "primary"
                        ? Variables.Colors.Primary300
                        : props.color === "secondary"
                        ? Variables.Colors.Secondary300
                        : props.color === "success"
                        ? Variables.Colors.Success300
                        : props.color === "danger"
                        ? Variables.Colors.Danger300
                        : props.color === "warning"
                        ? Variables.Colors.Warning300
                        : props.color === "white"
                        ? Variables.Colors.Gray100
                        : props.colorHover};
            }

            &:active {
                background-color: ${props =>
                    props.color === "primary"
                        ? Variables.Colors.Primary600
                        : props.color === "secondary"
                        ? Variables.Colors.Secondary600
                        : props.color === "success"
                        ? Variables.Colors.Success600
                        : props.color === "danger"
                        ? Variables.Colors.Danger600
                        : props.color === "warning"
                        ? Variables.Colors.Warning600
                        : props.color === "white"
                        ? Variables.Colors.Gray300
                        : props.colorActive};
            }
        `}

    ${props =>
        props.justify &&
        css`
            justify-self: ${props => props.justify};
        `}
`

const Label = styled.label`
    cursor: ${props =>
        props.color === "disabled" ? "not-allowed" : "pointer"};
    font-size: ${Variables.FontSizes.Body};
`

const Input = styled.input`
    display: none;

    &:checked ~ .icon {
        margin-left: ${Variables.Margins.XXS};
        width: inherit;
    }
`

const IconContainer = styled.label`
    cursor: ${props =>
        props.color === "disabled" ? "not-allowed" : "pointer"};
    width: 0;
    margin-left: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Long};
`

function Tag(props) {
    return (
        <Container
            justify={props.justify}
            color={props.color || "primary"}
            pill={props.pill}
            select={props.select}
        >
            {props.select ? (
                <>
                    <Input
                        type={props.type || "checkbox"}
                        id={props.id}
                        name={props.name}
                        {...props}
                    />

                    <Label htmlFor={props.id} color={props.color}>
                        {props.label}
                    </Label>

                    <IconContainer
                        htmlFor={props.id}
                        className="icon"
                        color={props.color}
                    >
                        <Icon name="close" size={16} />
                    </IconContainer>
                </>
            ) : (
                props.label
            )}
        </Container>
    )
}

export default Tag
