// Packages
import React from "react"
import styled, { css } from "styled-components"
import {
    LazyLoadImage,
    trackWindowScroll,
} from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/opacity.css"

// Components
import Variables from "./Variables"
import * as Font from "./Font"

// Styles
const Img = styled(LazyLoadImage)`
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

const Container = styled.div`
    position: relative;
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};

    span {
        width: 100%;
        display: block !important;
        width: ${props => props.width || "100%"};
        height: ${props => props.height || "auto"};
    }
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
    return props.caption ? (
        <Container width={props.width} height={props.height} {...props}>
            <Img
                width={props.width}
                height={props.height}
                src={props.src}
                alt={props.alt}
                fit={props.fit}
                effect="opacity"
                scrollPosition={scrollPosition}
            />

            <Caption>{props.caption}</Caption>
        </Container>
    ) : (
        <Img
            width={props.width}
            height={props.height}
            src={props.src}
            alt={props.alt}
            fit={props.fit}
            effect="opacity"
            scrollPosition={scrollPosition}
            {...props}
        />
    )
}

export default trackWindowScroll(Image)
