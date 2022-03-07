// Packages
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Spacers.S};
    }
`

export default ButtonsContainer
