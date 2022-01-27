// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Link from "../utils/LinkScroll"
import Icon from "./Icon"
import Loader from "./Loader"

// Styles
const Container = styled.button`
    border: 1px solid transparent;
    background: none;
    padding: ${props =>
        props.nopadding ? 0 : `${Variables.Margins.XS} ${Variables.Margins.S}`};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    border-radius: ${Variables.Radiuses.M};
    transition: ${Variables.Transitions.Short};
    display: inline-flex;
    align-items: center;
    text-align: center;
    text-decoration: none;

    &:disabled {
        cursor: not-allowed;
    }

    .icon-left {
        margin-right: ${Variables.Margins.XXS};
    }

    .icon-right {
        margin-left: ${Variables.Margins.XXS};
    }

    ${props =>
        props.btnstyle === "plain" &&
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
        props.btnstyle === "text" &&
        css`
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
    
    ${props =>
        props.btnstyle === "outline" &&
        css`
            border-color: ${props =>
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
                border-color: ${props =>
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
            }

            &:active {
                border-color: ${props =>
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
                border-color: ${Variables.Colors.Gray500};
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${props =>
        props.justify &&
        css`
            justify-self: ${props => props.justify};
        `}
`

function Button(props) {
    return (
        <Container
            as={props.to && Link}
            color={props.color || "primary"}
            btnstyle={props.btnstyle || "plain"}
            {...props}
        >
            {!props.loading && props.iconleft && (
                <Icon name={props.iconleft} size={16} className="icon-left" />
            )}

            {props.loading && (
                <Loader
                    size={16}
                    backgroundcolor={
                        props.btnstyle === "plain"
                            ? Variables.Colors.Gray100
                            : Variables.Colors.White
                    }
                    color="currentColor"
                />
            )}

            {props.children}

            {props.iconright && (
                <Icon name={props.iconright} size={16} className="icon-right" />
            )}
        </Container>
    )
}

export default Button
