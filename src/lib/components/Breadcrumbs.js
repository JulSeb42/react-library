// Packages
import styled from "styled-components"

// Components
import * as Variables from "./Variables"
import * as Font from "./Font"
import Link from "./LinkScroll"

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
