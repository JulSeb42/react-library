// Packages
import React, { useEffect } from "react"
import styled, { css } from "styled-components"
import LazyLoad, { forceCheck } from "react-lazyload"
import PropTypes from "prop-types"

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
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.S};
    background-color: ${Variables.Overlays.Plain.Black50};
    color: ${Variables.Colors.White};
`

const Image = props => {
    useEffect(() => {
        forceCheck()
    })

    return (
        <Container
            width={props.width}
            height={props.height}
            className={props.className}
        >
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

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
}

export default Image
