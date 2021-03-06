// Packages
import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"
import Icon from "./Icon"

// Styles
const Container = styled.span`
    display: inline-flex;
    align-items: center;
    transition: ${Variables.Transitions.Short};
    padding: ${Variables.Spacers.XXS} ${Variables.Spacers.S};
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
        margin-left: ${Variables.Spacers.XXS};
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
    display: inline-flex;
    align-items: center;
`

const Tag = props => {
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
                        {props.icon ? (
                            <Icon name={props.icon} size={16} />
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.7947 4.22933L7.96601 7.05733L5.13801 4.22933L4.19534 5.172L7.02334 8L4.19534 10.828L5.13801 11.7707L7.96601 8.94267L10.7947 11.7707L11.7373 10.828L8.90934 8L11.7373 5.172L10.7947 4.22933Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                    </IconContainer>
                </>
            ) : (
                props.label
            )}
        </Container>
    )
}

Tag.propTypes = {
    label: PropTypes.string.isRequired,
}

export default Tag
