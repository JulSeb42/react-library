// Packages
import React, { useState } from "react"
import styled, { css } from "styled-components"
import MDEditor from "@uiw/react-md-editor"

// Components
import * as Variables from "./Variables"
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
                {...props}
            />

            {(props.validation || props.password) && (
                <RightContainer>
                    {props.validation && props.value.length > 0 && (
                        <Icon
                            name={
                                props.validation === "passed"
                                    ? "check-circle"
                                    : "close-circle"
                            }
                            color={
                                props.validation === "passed"
                                    ? Variables.Colors.Success500
                                    : Variables.Colors.Danger500
                            }
                            size={16}
                        />
                    )}

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
        <InputStyled id={props.id} as="textarea" maxLength={props.counter} {...props} />
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
        <InputStyled id={props.id} {...props} />
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
                {...props}
            />
        </InputContainer>
    ) : (
        <InputFunction id={props.id} {...props} />
    )
}

export default Input
