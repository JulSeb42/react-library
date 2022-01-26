// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import Icon from "./Icon"

// Styles
const Container = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;

    ${props =>
        props.disabled &&
        css`
            cursor: not-allowed;
        `}

    ${props =>
        props.justify &&
        css`
            justify-self: ${props.justify};
        `}
`

const Label = styled.span`
    font-size: ${Variables.FontSizes.Body};

    ${props =>
        props.disabled &&
        css`
            color: ${Variables.Colors.Gray500};
        `}
`

const Input = styled.input`
    display: none;

    &:checked ~ .checkbox {
        background-color: ${Variables.Colors.Primary500};
        border-color: ${Variables.Colors.Primary500};

        .icon {
            display: inline-flex;
        }
    }

    &:disabled:checked ~ .checkbox {
        background-color: ${Variables.Colors.Gray200};
        border-color: ${Variables.Colors.Gray200};
        color: ${Variables.Colors.Gray800};
    }

    &:checked ~ .radio:before {
        background-color: ${Variables.Colors.Primary500};
    }

    &:disabled:checked ~ .radio:before {
        background-color: ${Variables.Colors.Gray500};
    }

    &:checked ~ .toggle {
        border-color: ${Variables.Colors.Success500};

        &:before {
            left: 12px;
            background-color: ${Variables.Colors.Success500};
        }
    }

    &:disabled ~ .toggle {
        border-color: ${Variables.Colors.Gray500};
    }

    &:disabled ~ .toggle:before {
        background-color: ${Variables.Colors.Gray500};
    }
`

const Checkbox = styled.label`
    --size: 14px;
    width: var(--size);
    height: var(--size);
    border: 1px solid ${Variables.Colors.Primary500};
    border-radius: ${Variables.Radiuses.S};
    margin-right: ${Variables.Margins.XXS};
    position: relative;
    color: ${Variables.Colors.White};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
        display: none;
    }

    ${props =>
        props.disabled &&
        css`
            border-color: ${Variables.Colors.Gray200};
            background-color: ${Variables.Colors.Gray50};
            color: ${Variables.Colors.Gray800};
            cursor: not-allowed;
        `}
`

const Radio = styled.label`
    --size: 14px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: 1px solid ${Variables.Colors.Primary500};
    margin-right: ${Variables.Margins.XXS};
    position: relative;

    &:before {
        content: "";
        --size: 8px;
        width: var(--size);
        height: var(--size);
        background-color: transparent;
        position: absolute;
        top: 2px;
        left: 2px;
        border-radius: 50%;
    }

    ${props =>
        props.disabled &&
        css`
            border-color: ${Variables.Colors.Gray500};
            cursor: not-allowed;
        `}
`

const Toggle = styled.label`
    width: 24px;
    height: 14px;
    display: inline-block;
    border-radius: 32px;
    border: 1px solid ${Variables.Colors.Primary500};
    margin-right: ${Variables.Margins.XS};
    transition: ${Variables.Transitions.Short};
    position: relative;

    &:before {
        content: "";
        position: absolute;
        --size: 8px;
        width: var(--size);
        height: var(--size);
        background-color: ${Variables.Colors.Primary500};
        border-radius: 50%;
        left: 2px;
        top: calc(50% - 8px / 2);
        transition: ${Variables.Transitions.Short};
    }
`

function CheckInput(props) {
    return (
        <Container justify={props.justify} disabled={props.disabled}>
            <Input type={props.type} id={props.id} {...props} />

            {!props.toggle && props.type === "checkbox" && (
                <Checkbox
                    className="checkbox"
                    htmlFor={props.id}
                    disabled={props.disabled}
                >
                    <Icon name="check" size={14} className="icon" />
                </Checkbox>
            )}

            {!props.toggle && props.type === "radio" && (
                <Radio
                    className="radio"
                    htmlFor={props.id}
                    disabled={props.disabled}
                />
            )}

            {props.toggle && (
                <Toggle
                    className="toggle"
                    htmlFor={props.id}
                    disabled={props.disabled}
                />
            )}

            <Label disabled={props.disabled}>{props.label}</Label>
        </Container>
    )
}

export default CheckInput
