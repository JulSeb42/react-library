// Packages
import React from "react"
import styled, { css } from "styled-components"
import Linkify from "react-linkify"
import ScrollToBottom from "react-scroll-to-bottom"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "./Icon"

// Styles
const MessagesContainer = styled.div`
    width: 100%;
    height: 65vh;
    border: 1px solid ${Variables.Colors.Gray100};
    padding: ${Variables.Margins.M};
    display: flex;
    flex-direction: column;
    border-radius: ${Variables.Radiuses.M};

    hr {
        margin: ${Variables.Margins.S} 0;
    }
`

const Empty = styled.div`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ListMessages = styled(ScrollToBottom)`
    flex-grow: 1;
    display: grid;
    margin-bottom: ${Variables.Margins.S};
    overflow-y: scroll;

    & > div {
        display: grid;
        grid-template-columns: 1fr;
        gap: ${Variables.Margins.S};
        align-content: start;
    }
`

const ContainerMessage = styled.div`
    display: flex;
    justify-content: ${props =>
        props.type === "sent" ? "flex-end" : "flex-start"};
`

const Bubble = styled(Font.P)`
    width: auto;
    display: inline;
    max-width: 70%;
    padding: ${Variables.Margins.XS} ${Variables.Margins.S};
    border-radius: ${Variables.Radiuses.S};

    a {
        text-decoration: underline;
        font-weight: ${Variables.FontWeights.Regular};
    }

    ${props =>
        props.type === "sent" &&
        css`
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};

            a {
                color: ${Variables.Colors.White};

                &:hover {
                    color: ${Variables.Colors.Gray100};
                }
            }
        `}

    ${props =>
        props.type === "received" &&
        css`
            background-color: ${Variables.Colors.Gray100};
            color: ${Variables.Colors.Black};
        `}
`

const ContainerSend = styled.div`
    height: 10%;
    display: flex;
    align-items: center;
    min-height: 50px;
`

const Input = styled.textarea`
    padding: 0;
    border: none;
    resize: none;
    flex-grow: 1;
    height: 100%;
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    margin-right: ${Variables.Margins.XS};
`

const Send = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: none;
    border-radius: 50%;
    color: ${Variables.Colors.Primary500};
    background: none;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray50};
    }
`

function EmptyContainer(props) {
    return (
        <Empty>
            <Font.P>{props.children}</Font.P>
        </Empty>
    )
}

function Message(props) {
    return (
        <ContainerMessage type={props.type} {...props}>
            <Bubble type={props.type}>
                <Linkify>{props.children}</Linkify>
            </Bubble>
        </ContainerMessage>
    )
}

function MessageInput(props) {
    return (
        <ContainerSend>
            <Input {...props} />

            <Send onClick={props.onClick}>
                {props.textbutton ? (
                    props.textbutton
                ) : (
                    <Icon name="send" size={16} />
                )}
            </Send>
        </ContainerSend>
    )
}

export {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
}
