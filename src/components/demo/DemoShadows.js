// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "../Variables"
import * as Font from "../Font"
import Grid from "../Grid"

// Styles
const Container = styled.div`
    border: 1px solid ${Variables.Colors.Gray100};
    border-radius: ${Variables.Radiuses.M};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
`

const SquareContainer = styled.div`
    width: 100%;
    padding: ${Variables.Margins.L};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Square = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    background-color: ${Variables.Colors.White};
    box-shadow: ${props => props.shadow};
    display: inline-block;
`

const Content = styled.div`
    padding: ${Variables.Margins.S};
`

// All shadows
const allShadows = [
    { name: "XXL", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
    {
        name: "XL",
        shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },
    {
        name: "L",
        shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    {
        name: "M",
        shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
    {
        name: "S",
        shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    },
    { name: "XS", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
]

function CardShadow({ shadow }) {
    return (
        <Container>
            <SquareContainer>
                <Square shadow={shadow.shadow} />
            </SquareContainer>

            <Content>
                <Font.P>Variables.Shadows.{shadow.name}</Font.P>
            </Content>
        </Container>
    )
}

function DemoShadows(props) {
    return (
        <Grid col={4}>
            {allShadows.map((shadow, i) => (
                <CardShadow shadow={shadow} key={i} />
            ))}
        </Grid>
    )
}

export default DemoShadows
