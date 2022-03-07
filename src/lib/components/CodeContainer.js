// Packages
import React from "react"
import styled from "styled-components"
import Lowlight from "react-lowlight"
import PropTypes from "prop-types"

// Languages
import javascript from "highlight.js/lib/languages/javascript"
import html from "highlight.js/lib/languages/vbscript-html"
import css from "highlight.js/lib/languages/css"
import scss from "highlight.js/lib/languages/scss"
import shell from "highlight.js/lib/languages/shell"

// Components
import Variables from "./Variables"

// Styles
const Container = styled(Lowlight)`
    padding: ${Variables.Spacers.M} !important;
    overflow-x: scroll !important;
    max-width: 100% !important;
    white-space: pre;
    background-color: ${Variables.Colors.Gray800};

    code {
        background-color: ${Variables.Colors.Gray800};
        padding: 0 !important;
        white-space: pre !important;
    }

    & > * {
        white-space: pre !important;
    }
`

const CodeContainer = props => {
    Lowlight.registerLanguage("html", html)
    Lowlight.registerLanguage("css", css)
    Lowlight.registerLanguage("scss", scss)
    Lowlight.registerLanguage("js", javascript)
    Lowlight.registerLanguage("shell", shell)

    return (
        <Container
            language={props.language}
            value={props.children}
            {...props}
        />
    )
}

CodeContainer.propTypes = {
    language: PropTypes.string.isRequired,
}

export default CodeContainer
