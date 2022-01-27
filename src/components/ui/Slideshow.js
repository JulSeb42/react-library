// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const SlideshowContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

const Slideshow = styled.div`
    width: 100%;
    height: 70vh;
    overflow: hidden;
    position: relative;
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

    & > span {
        width: 100%;
        height: 100%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

const SlideshowButton = styled.button`
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
