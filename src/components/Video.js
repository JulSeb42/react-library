// Packages
import React from "react"
import styled, { css } from "styled-components"
import { convertYoutube } from "js-utils-julseb"

// Styles
const Container = styled.video`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};

    ${props =>
        props.fit &&
        css`
            object-fit: ${props => props.fit};
        `}

    ${props =>
        props.aspectRatio &&
        css`
            height: inherit;
            aspect-ratio: ${props => props.aspectRatio};
        `}

    ${props =>
        props.youtube &&
        css`
            height: ${props => props.height || "30vw"};

            ${props =>
                props.aspectRatio &&
                css`
                    height: inherit;
                    aspect-ratio: ${props => props.aspectRatio};
                `}
        `}
`

const Video = props => {
    return props.youtube ? (
        <Container
            as="iframe"
            src={convertYoutube(props.youtube)}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            {...props}
        />
    ) : props.autoPlay ? (
        <Container muted autoPlay={true} preLoad="auto" loop {...props}>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    ) : (
        <Container {...props}>
            <source src={props.src} type="video/mp4" />
            Your browser does not support the video tag.
        </Container>
    )
}

export default Video
