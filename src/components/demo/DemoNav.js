// Packages
import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

// Components
import * as Variables from "../styles/Variables"

// Data
import pages from "./pages"

// Styles
const Container = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
    background-color: ${Variables.Colors.Primary500};
    height: 100vh;
    overflow-y: scroll;
    padding: ${Variables.Margins.M};
    align-content: start;
`

const Link = styled(NavLink)`
    color: ${Variables.Colors.White};
    text-decoration: none;
    font-weight: ${Variables.FontWeights.Bold};

    &.active {
        text-decoration: underline;
    }
`

function DemoNav() {
    return (
        <Container>
            {pages.map((page, i) => (
                <Link to={`/${page === "index" ? "" : page}`} key={i}>
                    {page.charAt(0).toUpperCase() +
                        page.slice(1).replace("-", " ")}
                </Link>
            ))}
        </Container>
    )
}

export default DemoNav
