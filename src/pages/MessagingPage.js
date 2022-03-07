// Packages
import React from "react"

import * as Font from "../components/Font"
import getToday from "../components/getToday"
import getTimeNow from "../components/getTimeNow"
import Hr from "../components/Hr"
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

                <Hr />

                <MessageInput placeholder="Type your message" />
            </MessagesContainer>

            <Font.H2>Empty</Font.H2>
            <MessagesContainer>
                <EmptyContainer>No message yet</EmptyContainer>

                <Hr />

                <MessageInput
                    placeholder="Type your message"
                    textbutton="Send"
                />
            </MessagesContainer>
        </>
    )
}

export default MessagingPage

