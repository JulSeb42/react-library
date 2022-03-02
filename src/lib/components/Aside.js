// Packages
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Aside = styled.aside`
    grid-column: ${props => props.col || 3};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.L};
    align-content: start;

    ${props =>
        (props.template === "aside-right" || props.template === "both-sides") &&
        css`
            grid-column: 2;
        `}

    ${props =>
        props.justify &&
        css`
            justify-items: ${props => props.justify};
        `}
`

export default Aside
