# Messaging

## List messages

<DemoMessaging />

```
function DemoMessaging() {
    return (
        <MessagesContainer>
            <ListMessages>
                <Message type="received">
                    Message received https://julien-sebag.design/
                </Message>

                <Message type="sent">Message sent</Message>
            </ListMessages>

            <Hr />

            <MessageInput placeholder="Type your message" />
        </MessagesContainer>
    )
}
```

## Empty 

<DemoMessagesEmpty />

```
function DemoMessagesEmpty() {
    return (
        <MessagesContainer>
            <EmptyContainer>No message yet</EmptyContainer>

            <Hr />

            <MessageInput placeholder="Type your message" textbutton="Send" />
        </MessagesContainer>
    )
}
```

## Props

```
Message
type: string, required, possible values: received and sent

MessageInput
onClick: function, required, function to send the message
textbutton: string, not required, if you want text instead of an icon on the button

EmptyContainer
children: string, required, message for empty state
```