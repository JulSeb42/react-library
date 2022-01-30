// Packages
import React from "react"
import styled, { css } from "styled-components"
import LazyLoad from "react-lazyload"

// Components
import Variables from "./Variables"
import * as Font from "./Font"

// Styles
const Container = styled(LazyLoad)`
    position: relative;
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};
`

const Img = styled.img`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};
    position: relative;
    z-index: 1;
    display: block;

    ${props =>
        props.fit &&
        css`
            object-fit: ${props => props.fit};
        `}
`

const Caption = styled(Font.P)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    padding: ${Variables.Margins.XS} ${Variables.Margins.S};
    background-color: ${Variables.Overlays.Plain.Black50};
    color: ${Variables.Colors.White};
`

function Image({ scrollPosition, ...props }) {
    return (
        <Container width={props.width} height={props.height}>
            <Img
                width={props.width}
                height={props.height}
                src={props.src}
                alt={props.alt}
                fit={props.fit}
                {...props}
                once
            />

            {props.caption && <Caption>{props.caption}</Caption>}
        </Container>
    )
}

export default Image