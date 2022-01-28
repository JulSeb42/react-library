// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "./Variables"
import Icon from "./Icon"

// Styles
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: ${Variables.Overlays.Plain.Black50};
    width: 100%;
    height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;

    &.open {
        display: flex;
    }

    img {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    .lazy-load-image-background {
        width: 90%;
        height: 90%;

        img {
            width: 100%;
            height: 100%;
        }
    }
`

const Close = styled.button`
    background: none;
    border: none;
    --size: 48px;
    width: var(--size);
    height: var(--size);
    position: absolute;
    top: ${Variables.Margins.L};
    right: ${Variables.Margins.L};
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.Colors.White};
    border-radius: 50%;
    transition: ${Variables.Transitions.Short};
    
    &:hover {
        background-color: ${Variables.Colors.Gray500}
    }
`

function Modal(props) {
    return (
        <Container {...props}>
            {props.close && (
                <Close onClick={props.close}>
                    <Icon name="close" size={32} component />
                </Close>
            )}

            {props.children}
        </Container>
    )
}

export default Modal
