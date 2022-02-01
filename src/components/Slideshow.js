// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "./Variables"
import Icon from "./Icon"

// Styles
const SlideshowContainer = styled.div`
    position: relative;
    display: inline-grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
    width: ${props => props.width || "100%"};
`

const Slideshow = styled.div`
    width: ${props => props.width || "100%"};
    height: ${props => props.height || "70vh"};
    overflow: hidden;
    position: relative;
    display: block;
`

const SlideshowItem = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
    transition: ${Variables.Transitions.Long};

    &.previous {
        left: -100%;
    }

    &.active {
        left: 0;
    }

    &.next {
        left: 100%;
    }

    .lazyload-wrapper,
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const SlideshowButtonContainer = styled.button`
    --size: 48px;
    width: var(--size);
    height: var(--size);
    border: none;
    background-color: ${Variables.Overlays.Plain.White50};
    position: absolute;
    top: calc(50% - var(--size) / 2);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: ${Variables.Transitions.Short};
    z-index: 2;
    color: ${Variables.Colors.Primary500};

    &:hover {
        background-color: ${Variables.Overlays.Plain.White80};
    }

    &:first-child {
        left: 0;
        border-radius: 0 ${Variables.Margins.S} ${Variables.Margins.S} 0;
    }

    &:last-child {
        right: 0;
        border-radius: ${Variables.Margins.S} 0 0 ${Variables.Margins.S};
    }
`

function SlideshowButton(props) {
    return (
        <SlideshowButtonContainer type="button" {...props}>
            {props.type === "prev" &&
                (props.customiconprev ? (
                    <Icon name={props.customiconprev} size={32} />
                ) : (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M17.724 8.39066L10.1147 16L17.724 23.6093L19.6093 21.724L13.8853 16L19.6093 10.276L17.724 8.39066Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}

            {props.type === "next" &&
                (props.customiconnext ? (
                    <Icon name={props.customiconnext} size={32} />
                ) : (
                    <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.276 23.6093L21.8853 16L14.276 8.39066L12.3907 10.276L18.1147 16L12.3907 21.724L14.276 23.6093Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}
        </SlideshowButtonContainer>
    )
}

const SlideshowPaginationContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: ${Variables.Margins.M};

    button:not(:last-child) {
        margin-right: ${Variables.Margins.XS};
    }
`

const SlideshowPaginationButton = styled.button`
    --size: ${props => `${props.size || 8}px`};
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    background-color: ${Variables.Colors.Primary300};
    transition: all 0.2s ease;
    display: block;
    padding: 0;

    &:hover,
    &.active {
        background-color: ${Variables.Colors.Primary500};
    }
`

export {
    SlideshowContainer,
    Slideshow,
    SlideshowItem,
    SlideshowButton,
    SlideshowPaginationContainer,
    SlideshowPaginationButton,
}
