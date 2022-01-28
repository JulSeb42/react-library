// Packages
import React from "react"
import { CopyBlock, nord } from "react-code-blocks"
import styled from "styled-components"

// Components
import * as Variables from "../Variables"

// Styles
const Container = styled(CopyBlock)`
    padding: ${Variables.Margins.M};
`

function CodeContainer(props) {
    return (
        <Container
            text={props.children}
            language="jsx"
            theme={nord}
            wrapLines
        />
    )
}

export default CodeContainer
