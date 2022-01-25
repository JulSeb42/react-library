// Packages
import React, { useState, useEffect } from "react"
import Markdown from "markdown-to-jsx"
import { Link } from "react-router-dom"

// Components
import * as Font from "../styles/Font"
import PageLayout from "./PageLayout"
import CodeContainer from "./CodeContainer"

// Components to import
import Grid from "../layouts/Grid"
import DemoColors from "../demo/DemoColors"
import DemoShadows from "./DemoShadows"
import Wrapper from "../layouts/Wrapper"
import Main from "../layouts/Main"
import Aside from "../layouts/Aside"
import Icon from "../ui/Icon"

const options = {
    forceBlock: true,

    wrapper: PageLayout,

    overrides: {
        Font: {
            component: Font,
        },

        h1: {
            component: Font.H1,
        },

        H1: {
            component: Font.H1,
        },

        h2: {
            component: Font.H2,
        },

        H2: {
            component: Font.H2,
        },

        h3: {
            component: Font.H3,
        },

        H3: {
            component: Font.H3,
        },

        h4: {
            component: Font.H4,
        },

        H4: {
            component: Font.H4,
        },

        h5: {
            component: Font.H5,
        },

        H5: {
            component: Font.H5,
        },

        h6: {
            component: Font.H6,
        },

        p: {
            component: Font.P,
        },

        P: {
            component: Font.P,
        },

        strong: {
            component: Font.Strong,
        },

        Strong: {
            component: Font.Strong,
        },

        em: {
            component: Font.Em,
        },

        Em: {
            component: Font.Em,
        },

        ul: {
            component: Font.List,
        },

        List: {
            component: Font.List,
        },

        small: {
            component: Font.Small,
        },

        Small: {
            component: Font.Small,
        },

        Link: {
            component: Link,
        },

        pre: {
            component: CodeContainer,
        },

        DemoColors,
        Grid,
        DemoShadows,
        Wrapper,
        Main,
        Aside,
        Icon,
    },
}

function MarkdownPage({ content }) {
    const [post, setPost] = useState("")

    useEffect(() => {
        import(`../../markdown/${content}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    })

    return <Markdown options={options}>{post}</Markdown>
}

export default MarkdownPage
