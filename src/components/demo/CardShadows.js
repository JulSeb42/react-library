// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "../Variables"
import * as Font from "../Font"

// Styles
const Container = styled.div`
    border: 1px solid ${Variables.Colors.Gray100};
    border-radius: ${Variables.Radiuses.M};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Spacers.XS};
`

const SquareContainer = styled.div`
    width: 100%;
    padding: ${Variables.Spacers.L};
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
    padding: ${Variables.Spacers.S};
`

const CardShadow = ({ shadow }) => {
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

export default CardShadow
