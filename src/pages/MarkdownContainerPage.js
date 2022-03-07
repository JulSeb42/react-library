// Packages
import React, { useState, useEffect } from "react"

import * as Font from "../components/Font"
import MarkdownContainer from "../components/MarkdownContainer"

const MarkdownContainerPage = () => {
    const options = {
        forceBlock: true,

        wrapper: "div",

        overrides: {
            h1: {
                component: Font.H1,
            },

            h2: {
                component: Font.H2,
            },

            h3: {
                component: Font.H3,
            },

            h4: {
                component: Font.H4,
            },

            h5: {
                component: Font.H5,
            },

            h6: {
                component: Font.H6,
            },

            p: {
                component: Font.P,
            },

            strong: {
                component: Font.Strong,
            },

            em: {
                component: Font.Em,
            },

            ul: {
                component: Font.List,
            },

            small: {
                component: Font.Small,
            },
        },
    }

    const [post, setPost] = useState("")

    useEffect(() => {
        import("./demos/DemoMarkdown.md")
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return <MarkdownContainer options={options}>{post}</MarkdownContainer>
}

export default MarkdownContainerPage
