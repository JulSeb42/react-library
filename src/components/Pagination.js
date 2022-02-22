// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"
import Icon from "./Icon"

// Styles
const Pagination = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    button:not(:last-child) {
        margin-right: ${Variables.Margins.XS};
    }
`

const Button = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    font-size: ${Variables.FontSizes.Body};
    line-height: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    font-weight: ${Variables.FontWeights.Bold};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Primary300};
        color: ${Variables.Colors.White};
    }

    &:active {
        background-color: ${Variables.Colors.Primary600};
        color: ${Variables.Colors.White};
    }

    &.active {
        background-color: ${Variables.Colors.Primary500};
        color: ${Variables.Colors.White};

        &:hover {
            background-color: ${Variables.Colors.Primary300};
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
        background-color: transparent;
    }

    ${props => props.icon === "more" && css`
        cursor: default;

        &:hover {
            background-color: transparent;
            color: ${Variables.Colors.Primary500};
        }
    `}
`

function PaginationButton(props) {
    return (
        <Button {...props}>
            {props.icon === "previous" &&
                (props.customiconprev ? (
                    <Icon name={props.customiconprev} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.862 4.19533L5.05733 7.99999L8.862 11.8047L9.80466 10.862L6.94266 7.99999L9.80466 5.13799L8.862 4.19533Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}

            {props.icon === "more" &&
                (props.customiconmore ? (
                    <Icon name={props.customiconmore} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.00002 6.66669C7.26669 6.66669 6.66669 7.26669 6.66669 8.00002C6.66669 8.73335 7.26669 9.33335 8.00002 9.33335C8.73335 9.33335 9.33335 8.73335 9.33335 8.00002C9.33335 7.26669 8.73335 6.66669 8.00002 6.66669ZM12 6.66669C11.2667 6.66669 10.6667 7.26669 10.6667 8.00002C10.6667 8.73335 11.2667 9.33335 12 9.33335C12.7334 9.33335 13.3334 8.73335 13.3334 8.00002C13.3334 7.26669 12.7334 6.66669 12 6.66669ZM4.00002 6.66669C3.26669 6.66669 2.66669 7.26669 2.66669 8.00002C2.66669 8.73335 3.26669 9.33335 4.00002 9.33335C4.73335 9.33335 5.33335 8.73335 5.33335 8.00002C5.33335 7.26669 4.73335 6.66669 4.00002 6.66669Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}

            {props.number && props.number}

            {props.icon === "next" &&
                (props.customiconnext ? (
                    <Icon name={props.customiconnext} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.138 11.8047L10.9427 7.99999L7.138 4.19533L6.19534 5.13799L9.05734 7.99999L6.19534 10.862L7.138 11.8047Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}
        </Button>
    )
}

export { Pagination, PaginationButton }
