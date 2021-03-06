// Packages
import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"

// Styles
const Container = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    position: relative;
    background: none;
    border: none;
    padding: 0;

    span {
        transition: ${Variables.Transitions.Short};
        width: 100%;
        height: ${props => `${props.border}px`};
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
        position: absolute;
        left: 0;

        &:first-child {
            top: 0;
        }

        &:nth-child(2) {
            top: calc(50% - ${props => `${props.border}px`} / 2);
        }

        &:last-child {
            bottom: 0;
        }
    }

    ${props =>
        props.open &&
        css`
            span {
                &:first-child {
                    transform: rotate(45deg);
                    top: 45%;
                }

                &:nth-child(2) {
                    width: 0;
                }

                &:last-child {
                    transform: rotate(-45deg);
                    bottom: 45%;
                }
            }
        `}
`

const Burger = props => {
    return (
        <Container
            width={props.width || 32}
            height={props.height || 24}
            color={props.color || "primary"}
            border={props.border || 2}
            aria-label={props.ariaLabel || "Menu button"}
            {...props}
        >
            <span />
            <span />
            <span />
        </Container>
    )
}

Burger.propTypes = {
    onClick: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
}

export default Burger
