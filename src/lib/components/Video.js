// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import convertYoutube from "./convertYoutube"

// Styles
const Container = styled.video`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "auto"};

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

function Video(props) {
    return props.youtube ? (
        <Container
            as="iframe"
            src={convertYoutube(props.youtube)}
            title="Youtube"
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
