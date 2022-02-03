// Packages
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Variables from "./Variables"
import * as Font from "./Font"

// Styles
export const Breadcrumbs = styled(Font.P)`
    a:after {
        content: "/";
        margin: 0 ${Variables.Margins.XXS};
        color: ${Variables.Colors.Black};
    }
`

export const BreadcrumbsLink = styled(Link)``

export const BreadcrumbsActive = styled.span``
