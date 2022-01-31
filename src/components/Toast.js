// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "./Variables"
import Grid from "./Grid"
import * as Font from "./Font"
import Icon from "./Icon"

// Styles
const Container = styled(Grid)`
    background-color: ${Variables.Colors.White};
    padding: ${Variables.Margins.M};
    box-shadow: ${Variables.Shadows.S};
    border-radius: ${Variables.Radiuses.M};
    max-width: 300px;
`

const Close = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray50};
    }
`

const TitleContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.span`
    display: flex;
    align-items: center;

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }
`

function TitleFunction(props) {
    return props.icon ? (
        <Title>
            <Icon name={props.icon} size={16} color={props.iconcolor} />

            <Font.H5>{props.title}</Font.H5>
        </Title>
    ) : (
        <Font.H5>{props.title}</Font.H5>
    )
}

function Toast(props) {
    return (
        <Container gap={Variables.Margins.XS} {...props}>
            {props.close ? (
                <TitleContainer>
                    <TitleFunction
                        title={props.title}
                        icon={props.icon}
                        iconcolor={props.iconcolor}
                    />

                    <Close onClick={props.close}>
                        {props.customiconclose ? (
                            <Icon name={props.customiconclose} size={24} />
                        ) : (
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                    </Close>
                </TitleContainer>
            ) : (
                <TitleFunction
                    title={props.title}
                    icon={props.icon}
                    iconcolor={props.iconcolor}
                />
            )}

            {props.children && <Font.P>{props.children}</Font.P>}
        </Container>
    )
}

export default Toast
