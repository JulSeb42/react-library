// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const PageLayout = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    margin-left: 200px;
    padding: ${Variables.Margins.XXL};
`

export default PageLayout
