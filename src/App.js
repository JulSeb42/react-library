// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Components
import DemoNav from "./components/demo/DemoNav"
import MarkdownPage from "./components/demo/MarkdownPage"
import NotFound from "./pages/NotFound"

// Styles
import GlobalStyles from "./components/styles/GlobalStyles"

// Data
import pages from "./components/demo/pages"

function App() {
    return (
        <>
            <GlobalStyles />

            <DemoNav />

            <Routes>
                <Route path="*" element={<NotFound />} />

                {pages.map((page, i) => (
                    <Route
                        path={`/${page === "index" ? "" : page}`}
                        element={<MarkdownPage content={page} />}
                        key={i}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App
