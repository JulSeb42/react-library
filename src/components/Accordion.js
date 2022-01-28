// Packages
import React, { useState } from "react"
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"
import * as Font from "./Font"
import Grid from "./Grid"
import Icon from "./Icon"

// Styles
const AccordionContainer = styled(Grid)`
    gap: 0;

    ${props =>
        props.accordionstyle === "basic" &&
        css`
            width: 100%;
            gap: ${Variables.Margins.XS};

            .content-accordion {
                padding: 0;
            }

            .open-accordion {
                padding: ${Variables.Margins.XS} 0;
            }

            .content-accordion.open {
                padding-bottom: ${Variables.Margins.XS};
            }

            & > div:not(:last-child) {
                border-bottom: 1px solid ${Variables.Colors.Primary500};
            }
        `}

    ${props =>
        props.accordionstyle === "rounded" &&
        css`
            width: 100%;
            border-radius: ${Variables.Radiuses.M};
            border: 1px solid ${Variables.Colors.Gray200};
            overflow: hidden;

            & > div:not(:last-child) {
                border-bottom: 1px solid ${Variables.Colors.White};
            }

            .open-accordion,
            .content-accordion.open {
                padding: ${Variables.Margins.S};
            }

            .open-accordion {
                background-color: ${Variables.Colors.Primary500};
                color: ${Variables.Colors.White};
            }
        `}
`

const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`

const Button = styled.button`
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};

    .icon {
        transition: ${Variables.Transitions.Short};
    }

    ${props =>
        props.icon === "plus" &&
        css`
            .icon.open {
                transform: rotate(45deg);
            }
        `}

    ${props =>
        props.icon !== "plus" &&
        css`
            .icon.open {
                transform: rotate(180deg);
            }
        `}
`

const Content = styled(Font.P)`
    max-height: 0;
    padding: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};
    padding: 0 ${Variables.Margins.S};

    &.open {
        max-height: 600px;
    }
`

function Accordion(props) {
    return (
        <AccordionContainer accordionstyle={props.accordionstyle || "basic"} {...props}>
            {props.children}
        </AccordionContainer>
    )
}

function AccordionItem(props) {
    const [isOpen, setIsOpen] = useState(props.isOpen || false)

    return (
        <Item {...props}>
            <Button
                className="open-accordion"
                onClick={() => setIsOpen(!isOpen)}
                icon={props.icon}
            >
                <span>{props.title}</span>

                <Icon
                    name={props.icon === "plus" ? "plus" : "chevron-down"}
                    size={16}
                    className={`icon ${isOpen ? "open" : ""}`}
                    component
                />
            </Button>

            <Content className={`content-accordion ${isOpen ? "open" : ""}`}>
                {props.children}
            </Content>
        </Item>
    )
}

export { Accordion, AccordionItem }
