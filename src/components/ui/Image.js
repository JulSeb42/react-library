// Packages
import React from "react"
import styled, { css } from "styled-components"
import Async from "react-async-image"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Img = styled(Async)`
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

function Image(props) {
    return props.caption ? (
        <Container width={props.width} height={props.height} {...props}>
            <Img
                width={props.width}
                height={props.height}
                src={props.src}
                alt={props.alt}
                fit={props.fit}
            />

            <Caption>{props.caption}</Caption>
        </Container>
    ) : (
        <Img
            src={props.src}
            alt={props.alt}
            width={props.width}
            height={props.height}
            {...props}
        />
    )
}

export default Image
