// Packages
import React from "react"
import styled from "styled-components"
import { ReactSVG } from "react-svg"
import PropTypes from "prop-types"

// Styles
const IconStyled = styled(ReactSVG)`
    display: inline-flex;
    width: ${props => `${props.size}px`};
    height: ${props => `${props.size}px`};
    align-items: center;
    justify-content: center;

    span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }

    svg {
        fill: black;
        width: 100%;
        height: 100%;
    }

    path {
        fill: ${props => props.color};
    }
`

const Icon = props => {
    return (
        <IconStyled
            src={`/icons/${props.name}.svg`}
            color={props.color || "currentColor"}
            size={props.size}
            wrapper="span"
            {...props}
        />
    )
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

export default Icon

// How to use
// Import in the file you want to use this component
// import Icon from "/path/to/Icon"
// Use the component
// <Icon name="name-of-icon" size={32} color="color" />
