// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import InputContainer from "./InputContainer"
import Image from "./Image"
import Icon from "./Icon"

// Styles
const Container = styled.label`
    position: relative;
    --size: 80px;
    width: var(--size);
    height: var(--size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    &:hover .hover {
        opacity: 1;
    }
`

const Input = styled.input`
    display: none;
`

const Img = styled(Image)`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    object-fit: cover;
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: ${Variables.Colors.Gray200};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const HoverContainer = styled.span`
    position: absolute;
    z-index: 2;
    background-color: ${Variables.Overlays.Plain.White50};
    color: ${Variables.Colors.Primary500};
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: ${Variables.Transitions.Short};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

function Empty() {
    return (
        <EmptyContainer>
            <Icon name="user" size={64} />
        </EmptyContainer>
    )
}

function Hover() {
    return (
        <HoverContainer className="hover">
            <Icon name="edit" size={32} />
        </HoverContainer>
    )
}

function InputImage(props) {
    return props.label || props.helper || props.validation ? (
        <InputContainer
            label={props.label}
            helper={props.helper}
            validation={props.validation}
            id={props.id}
        >
            <Container>
                <Input type="file" id={props.id} {...props} />

                {props.src === "" ? (
                    <Empty />
                ) : (
                    <Img src={props.src} alt={props.alt} />
                )}

                <Hover />
            </Container>
        </InputContainer>
    ) : (
        <Container>
            <Input type="file" id={props.id} {...props} />

            {props.src === "" ? (
                <Empty />
            ) : (
                <Img src={props.src} alt={props.alt} />
            )}

            <Hover />
        </Container>
    )
}

export default InputImage
