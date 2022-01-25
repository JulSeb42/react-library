// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"

// Styles
const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 100px 1fr;
    align-items: center;
    border: 1px solid ${Variables.Colors.Gray100};
    border-radius: ${Variables.Radiuses.L};
    overflow: hidden;
`

const Color = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: block;
    background-color: ${props => props.color};
`

const Content = styled.div`
    padding: ${Variables.Margins.XS};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

function ColorCard({ color }) {
    return (
        <Container>
            <Color color={color.rgb} />

            <Content>
                <Font.Strong>Variables.Colors.{color.name}</Font.Strong>
                <Font.P>{color.rgb}</Font.P>
            </Content>
        </Container>
    )
}

export default ColorCard
