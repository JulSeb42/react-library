// Packages
import React from "react"
import styled from "styled-components"
import Markdown from "markdown-to-jsx"

// Components
import Variables from "./Variables"

// Styles
const Container = styled(Markdown)`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Spacers.XS};
`

const MarkdownContainer = props => {
    return (
        <Container options={props.options} {...props}>
            {props.children}
        </Container>
    )
}

export default MarkdownContainer
