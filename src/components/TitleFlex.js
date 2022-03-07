// Packages
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const TitleFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > *:first-child {
        margin-right: ${Variables.Spacers.XS};
    }
`

export default TitleFlex
