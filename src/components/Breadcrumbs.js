// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"
import * as Font from "./Font"

// Styles
const Breadcrumbs = styled(Font.P)`
    a:after {
        content: "/";
        margin: 0 ${Variables.Spacers.XXS};
        color: ${Variables.Colors.Black};
    }
`

const Item = styled.span``

const BreadcrumbsItem = props => {
    return (
        <Item as={props.to && Link} to={props.to} {...props}>
            {props.children}
        </Item>
    )
}

BreadcrumbsItem.propTypes = {
    children: PropTypes.string.isRequired,
}

export { Breadcrumbs, BreadcrumbsItem }
