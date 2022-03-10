// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"
import * as Font from "./Font"
import IconMixin from "./IconMixin"

// Styles
const Breadcrumbs = styled(Font.P)`
    a:after {
        content: "/";
        margin: 0 ${Variables.Spacers.XXS};
        color: ${Variables.Colors.Gray500};
    }

    ${props =>
        props.icon &&
        css`
            a {
                display: inline-flex;
                align-items: center;

                &:after {
                    ${IconMixin({
                        icon: props.icon,
                        size: 14,
                        color: Variables.Colors.Gray500,
                    })};
                    margin-top: 2px;
                }
            }
        `}
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
