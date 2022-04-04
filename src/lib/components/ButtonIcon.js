// Packages
import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"
import Icon from "./Icon"

// Styles
const Container = styled.button`
    justify-self: start;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 50%;
    border: none;
    transition: ${Variables.Transitions.Short};

    ${props =>
        props.btnStyle === "plain" &&
        css`
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
                    : props.color};
            color: ${props =>
                props.color === "white"
                    ? Variables.Colors.Primary500
                    : Variables.Colors.White};

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

            &:disabled {
                background-color: ${Variables.Colors.Gray100};
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${props =>
        props.btnStyle === "transparent" &&
        css`
            background-color: transparent;
            color: ${props =>
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

            &:hover {
                color: ${props =>
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

                ${props =>
                    props.hoverBackground &&
                    css`
                        background-color: ${Variables.Colors.Gray50};

                        &:disabled {
                            background-color: transparent;
                        }
                    `}
            }

            &:active {
                color: ${props =>
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

            &:disabled {
                color: ${Variables.Colors.Gray500};
            }
        `}
`

const ButtonIcon = props => {
    return (
        <Container
            as={props.to && Link}
            size={props.size || 48}
            btnStyle={props.btnStyle || "plain"}
            color={props.color || "primary"}
            {...props}
        >
            <Icon name={props.icon} size={props.size * 0.6 || 48 * 0.6} />
        </Container>
    )
}

ButtonIcon.propTypes = {
    icon: PropTypes.string.isRequired,
}

export default ButtonIcon
