// Packages
import React from "react"

import * as Font from "../components/Font"
import { getToday, getTimeNow } from "js-utils-julseb"
import {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
} from "../components/Messaging"

const MessagingPage = () => {
    return (
        <>
            <Font.H2>With messages</Font.H2>
            <MessagesContainer>
                <ListMessages>
                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent">Message sent</Message>

                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent">
                        Message sent https://julien-sebag.design/
                    </Message>

                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent">Message sent</Message>

                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent">
                        Message sent https://julien-sebag.design/
                    </Message>

                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent">Message sent</Message>

                    <Message type="received">
                        Message received https://julien-sebag.design/
                    </Message>

                    <Message type="sent" date={getToday()} time={getTimeNow()}>
                        Message sent https://julien-sebag.design/
                    </Message>
                </ListMessages>

                <MessageInput placeholder="Type your message" />
            </MessagesContainer>

            <Font.H2>Empty</Font.H2>
            <MessagesContainer>
                <EmptyContainer>No message yet</EmptyContainer>

                <MessageInput
                    placeholder="Type your message"
                    textbutton="Send"
                />
            </MessagesContainer>
        </>
    )
}

export default MessagingPage

