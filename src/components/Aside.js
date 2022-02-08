// Packages
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Aside = styled.aside`
    grid-column: ${props => props.col || 3};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.L};
    align-content: start;
`

export default Aside
