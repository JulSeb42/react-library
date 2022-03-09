// Packages
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${props => props.gap || Variables.Spacers.S};
    }
`

export default ButtonsContainer
