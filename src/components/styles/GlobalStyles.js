// Packages
import { createGlobalStyle } from "styled-components"

// Variables
import * as Variables from "./Variables"

// Styles
const GlobalStyles = createGlobalStyle`
    html,
    body {
        background-color: ${Variables.Colors.White};
        color: ${Variables.Colors.Black};
        font-family: ${Variables.FontFamily.Body};
        font-weight: ${Variables.FontWeights.Regular};
        line-height: ${Variables.LineHeight};
    }

    .sc-ksdxgE.jUVESz {
        padding: ${Variables.Margins.M} !important;
    }
`

export default GlobalStyles
