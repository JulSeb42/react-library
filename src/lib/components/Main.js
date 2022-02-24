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

    ${props => props.template === "aside-left" && css`
        @media ${Variables.Breakpoints.Tablet} {
            grid-column: 2;
        }
    `}
`

export default Main
