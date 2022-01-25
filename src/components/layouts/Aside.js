// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Aside = styled.aside`
    grid-column: ${props => props.col || 3};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${props => props.gap || Variables.Margins.L};
`

export default Aside
