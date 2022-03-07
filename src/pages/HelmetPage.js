// Packages
import React from "react"

import * as Font from "../components/Font"
import Helmet from "../components/Helmet"

const HelmetPage = () => {
    return (
        <>
            <Helmet title="Page title" />

            <Font.P>
                All options{" "}
                <a
                    href="https://www.npmjs.com/package/react-helmet"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    here
                </a>
            </Font.P>
        </>
    )
}

export default HelmetPage

