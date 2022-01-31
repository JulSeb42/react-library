// Packages
import React, { useState } from "react"
import styled, { css } from "styled-components"
import MDEditor from "@uiw/react-md-editor"

// Components
import Variables from "./Variables"
import InputContainer from "./InputContainer"
import Icon, { IconMixin } from "./Icon"

// Styles
const Container = styled.div`
    position: relative;
`

const InputStyled = styled.input`
    position: relative;
    z-index: 1;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    outline: none;
    padding: ${Variables.Margins.XS} ${Variables.Margins.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    height: 35px;
    width: 100%;

    &:focus {
        border-color: ${Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${Variables.Colors.Gray800};
        border-color: ${Variables.Colors.Gray200};
        background-color: ${Variables.Colors.Gray50};
    }

    ${props =>
        props.type === "textarea" &&
        css`
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeight} * 3 +
                    ${Variables.Margins.XXS} * 2
            );
            resize: vertical;
        `}

    ${props =>
        props.type === "select" &&
        css`
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${props =>
        props.icon &&
        css`
            padding-left: calc(${Variables.Margins.XS} + 32px);
        `}
    
    ${props =>
        props.validation &&
        props.validation !== "passed" &&
        props.value.length > 0 &&
        css`
            background-color: ${Variables.Colors.Danger50};

            &:focus {
                border-color: ${Variables.Colors.Danger500};
            }
        `}
`

const IconContainer = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 32px;
    color: ${props =>
        props.disabled
            ? Variables.Colors.Gray800
            : Variables.Colors.Primary500};

    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        width: 1px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const RightContainer = styled.span`
    position: absolute;
    top: 0;
    right: ${Variables.Margins.XS};
    height: 100%;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Margins.XXS};
    }
`

const ButtonPassword = styled.button`
    border: none;
    padding: 0;
    background: none;
    color: ${Variables.Colors.Primary500};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    transition: ${Variables.Transitions.Short};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }
`

const SelectContainer = styled.div`
    position: relative;

    &:after {
        ${IconMixin({
            icon: "chevron-down",
            size: 16,
            color: Variables.Colors.Primary500,
        })}
        position: absolute;
        z-index: 2;
        top: calc(50% - 16px / 2);
        right: ${Variables.Margins.XS};

        ${props =>
            props.disabled &&
            css`
                ${IconMixin({
                    icon: "chevron-down",
                    size: 16,
                    color: Variables.Colors.Gray800,
                })}
            `}
    }
`

// Components
function InputFunction(props) {
    const [isVisible, setIsVisible] = useState(false)
    const visible = isVisible ? "text" : "password"

    return props.icon || props.password || props.validation ? (
        <Container type={props.type}>
            {props.icon && (
                <IconContainer disabled={props.disabled}>
                    <Icon name={props.icon} size={16} />
                </IconContainer>
            )}

            <InputStyled
                id={props.id}
                value={props.value}
                type={props.password ? visible : props.type}
                onChange={props.onChange}
                icon={props.icon}
                maxLength={props.counter}
                {...props}
            />

            {(props.validation || props.password) && (
                <RightContainer>
                    {props.validation &&
                        props.value.length > 0 &&
                        (props.validation === "passed" ? (
                            props.customiconpassed ? (
                                <Icon
                                    name={props.customiconpassed}
                                    color={Variables.Colors.Success500}
                                    size={16}
                                />
                            ) : (
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.13333 7.528L6.666 9.058L10.1953 5.52867L11.138 6.47133L6.66733 10.942L4.192 8.472L5.13333 7.528Z"
                                        fill={Variables.Colors.Success500}
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M1.33334 8C1.33334 4.324 4.324 1.33334 8 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8C14.6667 11.676 11.676 14.6667 8 14.6667C4.324 14.6667 1.33334 11.676 1.33334 8ZM2.66667 8C2.66667 10.9407 5.05934 13.3333 8 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8C13.3333 5.05934 10.9407 2.66667 8 2.66667C5.05934 2.66667 2.66667 5.05934 2.66667 8Z"
                                        fill={Variables.Colors.Success500}
                                    />
                                </svg>
                            )
                        ) : props.customiconnotpassed ? (
                            <Icon
                                name={props.customiconnotpassed}
                                color={Variables.Colors.Danger500}
                                size={16}
                            />
                        ) : (
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.88532 10.828L7.99999 8.94267L6.11466 10.828L5.17199 9.88534L7.05733 8L5.17199 6.11467L6.11466 5.172L7.99999 7.05734L9.88532 5.172L10.828 6.11467L8.94266 8L10.828 9.88534L9.88532 10.828Z"
                                    fill={Variables.Colors.Danger500}
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M14.6667 8C14.6667 11.676 11.676 14.6667 7.99999 14.6667C4.32399 14.6667 1.33333 11.676 1.33333 8C1.33333 4.324 4.32399 1.33334 7.99999 1.33334C11.676 1.33334 14.6667 4.324 14.6667 8ZM13.3333 8C13.3333 5.05934 10.9407 2.66667 7.99999 2.66667C5.05933 2.66667 2.66666 5.05934 2.66666 8C2.66666 10.9407 5.05933 13.3333 7.99999 13.3333C10.9407 13.3333 13.3333 10.9407 13.3333 8Z"
                                    fill={Variables.Colors.Danger500}
                                />
                            </svg>
                        ))}

                    {props.password && (
                        <ButtonPassword
                            onClick={() => setIsVisible(!isVisible)}
                            type="button"
                        >
                            {isVisible ? "Hide" : "Show"}
                        </ButtonPassword>
                    )}
                </RightContainer>
            )}
        </Container>
    ) : props.type === "textarea" ? (
        <InputStyled
            id={props.id}
            as="textarea"
            maxLength={props.counter}
            {...props}
        />
    ) : props.type === "select" ? (
        <SelectContainer disabled={props.disabled}>
            <InputStyled as="select" id={props.id} {...props}>
                {props.children}
            </InputStyled>
        </SelectContainer>
    ) : props.type === "markdown" ? (
        <MDEditor
            value={props.value}
            onChange={props.onChange}
            preview={props.preview || "edit"}
            {...props}
        />
    ) : (
        <InputStyled id={props.id} maxLength={props.counter} {...props} />
    )
}

function Input(props) {
    return props.label || props.helper || props.validation || props.counter ? (
        <InputContainer
            label={props.label}
            helper={props.helper}
            validation={props.validation}
            validationText={props.validationText}
            id={props.id}
            value={props.value}
            counter={props.counter}
        >
            <InputFunction
                validation={props.validation}
                id={props.id}
                max={props.counter && props.counter}
                customiconpassed={props.customiconpassed}
                customiconnotpassed={props.customiconnotpassed}
                {...props}
            />
        </InputContainer>
    ) : (
        <InputFunction id={props.id} {...props} />
    )
}

export default Input
