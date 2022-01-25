// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import * as Font from "../components/styles/Font"

// Pages
const pages = ["colors", "fonts"]

function Home(props) {
    return (
        <>
            <Font.H1>Homepage</Font.H1>

            <Font.List>
                {pages.map((page, i) => (
                    <li key={i}>
                        <Link to={`/${page}`}>{page.charAt(0).toUpperCase() + page.slice(1)}</Link>
                    </li>
                ))}
            </Font.List>
        </>
    )
}

export default Home
