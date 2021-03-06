// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

// Components
import Flexbox from "./Flexbox"
import Badge from "./Badge"
import Variables from "./Variables"
import * as Font from "./Font"

// Styles
const Container = styled(Flexbox)`
    position: relative;

    &:before {
        content: "";
        position: absolute;
        top: calc(12px - 2px / 2);
        left: 12px;
        width: calc(100% - 24px);
        height: 2px;
        background-color: ${Variables.Colors.Primary500};
        z-index: 1;
    }
`

const Step = styled(Flexbox)`
    position: relative;
    z-index: 2;
`

const Number = styled(Badge)`
    outline: 4px solid ${Variables.Colors.White};
`

const Text = styled(Font.Small)`
    color: ${Variables.Colors.Primary500};
    text-decoration: none;

    ${props =>
        props.to &&
        css`
            font-weight: ${Variables.FontWeights.Bold};
            transition: ${Variables.Transitions.Short};

            &:hover {
                color: ${Variables.Colors.Primary300};
            }

            &:active {
                color: ${Variables.Colors.Primary600};
            }
        `}
`

const Stepper = props => {
    return (
        <Container justify="space-between">
            {props.steps.map((step, i) => (
                <Step
                    key={i}
                    as="span"
                    direction="column"
                    align="center"
                    justify="center"
                    gap={Variables.Spacers.XXS}
                >
                    <Number
                        size={24}
                        color={
                            props.active >= i + 1
                                ? "primary"
                                : Variables.Colors.Primary300
                        }
                        icon={props.active > i + 1 && "check"}
                    >
                        {(props.active < i + 1 || props.active === i + 1) &&
                            i + 1}
                    </Number>

                    <Text as={step.to && Link} to={step.to}>
                        {step.text}
                    </Text>
                </Step>
            ))}
        </Container>
    )
}

export default Stepper
