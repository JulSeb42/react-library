// Packages
import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

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

    ${props =>
        props.open &&
        css`
            display: flex;
        `}

    img {
        width: 90%;
        height: 90%;
        object-fit: contain;
    }

    .lazyload-wrapper {
        width: 90%;
        height: 90%;
        display: block;

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
    top: ${Variables.Spacers.L};
    right: ${Variables.Spacers.L};
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${Variables.Colors.White};
    border-radius: 50%;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray500};
    }
`

const Modal = props => {
    return (
        <Container {...props}>
            {props.close && (
                <Close onClick={props.close}>
                    {props.icon ? (
                        <Icon name={props.icon} size={32} />
                    ) : (
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M21.5893 8.45866L15.932 14.1147L10.276 8.45866L8.39066 10.344L14.0467 16L8.39066 21.656L10.276 23.5413L15.932 17.8853L21.5893 23.5413L23.4747 21.656L17.8187 16L23.4747 10.344L21.5893 8.45866Z"
                                fill="currentColor"
                            />
                        </svg>
                    )}
                </Close>
            )}

            {props.children}
        </Container>
    )
}

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default Modal
