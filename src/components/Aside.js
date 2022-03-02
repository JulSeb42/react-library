// Packages
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Aside = styled.aside`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.L};
    align-content: start;
    grid-column: ${props =>
        props.template === "aside-left"
            ? 2
            : props.template === "aside-right"
            ? 3
            : props.template === "both-sides"
            ? 2
            : ""};

    ${props =>
        props.template === "both-sides" &&
        props.last &&
        css`
            grid-column: 4;
        `}

    @media ${Variables.Breakpoints.Tablet} {
        grid-column: 2;
    }

    ${props =>
        props.justify &&
        css`
            justify-items: ${props => props.justify};
        `}
`

export default Aside
