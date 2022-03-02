// Packages
import React from "react"
import getToday from "../getToday"
import getTimeNow from "../getTimeNow"
import {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
} from "../Messaging"
import Hr from "../Hr"

function DemoMessaging() {
    return (
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
    )
}

function DemoMessagesEmpty() {
    return (
        <MessagesContainer>
            <EmptyContainer>No message yet</EmptyContainer>

            <Hr />

            <MessageInput placeholder="Type your message" textbutton="Send" />
        </MessagesContainer>
    )
}

export { DemoMessaging, DemoMessagesEmpty}
