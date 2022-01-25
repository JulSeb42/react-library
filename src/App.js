// Packages
import React from "react"
import { Routes, Route, useLocation, Link } from "react-router-dom"

// Components
import * as Font from "./components/styles/Font"

// Pages
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Colors from "./pages/Colors"
import Fonts from "./pages/Fonts"

// Map pages
const Pages = [
    {
        path: "/",
        exact: true,
        component: Home,
    },
    {
        path: "*",
        component: NotFound,
    },
    {
        path: "/colors",
        component: Colors,
    },
    {
        path: "/fonts",
        component: Fonts,
    },
]

function App() {
    const location = useLocation().pathname

    return (
        <>
            {location !== "/" && (
                <Font.P>
                    <Link to="/">Back to homepage</Link>
                </Font.P>
            )}

            <Routes>
                {Pages.map((route, index) => (
                    <Route
                        path={route.path}
                        exact={route.exact}
                        element={<route.component />}
                        key={index}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App
