// Packages
import React from "react"
import { Link } from "react-router-dom"

import * as Font from "../components/Font"

const PageLoadingPage = () => {
    return (
        <>
            <Font.P>
                <Link to="/page-loading/demo" target="_blank" rel="noreferrer noopener">Demo</Link>
            </Font.P>
        </>
    )
}

export default PageLoadingPage

