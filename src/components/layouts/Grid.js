// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col || 1}, 1fr);
    gap: ${props => props.gap || Variables.Margins.L};
`

export default Grid
