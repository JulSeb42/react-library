// Packages
import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

// Components
import Variables from "../Variables"

// Pages
import routes from "../../routes/routes"
import capitalize from "../capitalize"

// Styles
const Container = styled.nav`
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    background-color: ${Variables.Colors.Primary500};
    display: grid;
    gap: ${Variables.Spacers.XS};
    height: 100vh;
    align-content: start;
    padding: ${Variables.Spacers.L};
    overflow-y: scroll;

    a {
        color: ${Variables.Colors.White};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary100};
        }

        &.active {
            font-weight: ${Variables.FontWeights.Black};
        }
    }
`

const NavDemo = () => {
    return (
        <Container>
            {routes.map((route, i) => (
                <NavLink to={route.path} key={i}>
                    {route.path === "/"
                        ? "Home"
                        : capitalize(route.path.replace("/", "").replace("-", " "))}
                </NavLink>
            ))}
        </Container>
    )
}

export default NavDemo
