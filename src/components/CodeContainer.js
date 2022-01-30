// Packages
import React from "react"
import Highlight from "react-highlight"
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Container = styled(Highlight)`
    padding: ${Variables.Margins.M};
`

function CodeContainer(props) {
    return (
        <Container {...props}>
            {props.children}
        </Container>
    )
}

export default CodeContainer