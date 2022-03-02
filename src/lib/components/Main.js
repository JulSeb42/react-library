// Packages
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Main = styled.main`
    grid-column: ${props => props.col || 2};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.L};
    align-content: start;

    ${props =>
        (props.template === "aside-left" || props.template === "both-sides") &&
        css`
            @media ${Variables.Breakpoints.Tablet} {
                grid-column: 2;
            }
        `}

    ${props =>
        props.justify &&
        css`
            justify-items: ${props => props.justify};
        `}
`

export default Main
