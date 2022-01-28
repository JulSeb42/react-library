// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Font from "../components/Font"
import Variables from "../components/Variables"

// Styles
const Container = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    margin-left: 200px;
    padding: ${Variables.Margins.XXL};
`

function NotFound(props) {
    return (
        <Container>
            <Font.H1>Not found!</Font.H1>
        </Container>
    )
}

export default NotFound
