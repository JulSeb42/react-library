// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "./Variables"
import Image from "./Image"
import Icon from "./Icon"

// Styles
const Container = styled.span`
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    border-radius: 50%;
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: calc(${props => `${props.size}px`} * 0.7);
    line-height: 100%;
    background-color: ${props =>
        props.background || Variables.Colors.Primary500};
    color: ${props => props.color || Variables.Colors.White};
    font-weight: ${Variables.FontWeights.Black};
`

function Avatar(props) {
    return (
        <Container size={props.size || 48} {...props}>
            {props.src && (
                <Image
                    src={props.src}
                    alt={props.alt}
                    width="100%"
                    height="100%"
                    fit="cover"
                />
            )}

            {props.children && props.children}

            {props.icon && <Icon name={props.icon} size={props.size * 0.7 || 48 * 0.7} />}
        </Container>
    )
}

export default Avatar
