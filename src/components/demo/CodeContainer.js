// Packages
import React from "react"

// Components
import Container from "../CodeContainer"

function CodeContainer(props) {
    return (
        <Container className={props.className || "javascript"}>
            {props.children}
        </Container>
    )
}

export default CodeContainer
