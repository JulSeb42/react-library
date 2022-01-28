// Packages
import React from "react"
import styled from "styled-components"

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
        background-color: ${Variables.Colors.Gray100};
    }
`

function PaginationButton(props) {
    return (
        <Button {...props}>
            {props.icon === "previous" && (
                <Icon name="chevron-left" size={16} component />
            )}

            {props.number && props.number}

            {props.icon === "next" && (
                <Icon name="chevron-right" size={16} component />
            )}
        </Button>
    )
}

export { Pagination, PaginationButton }
