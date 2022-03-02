// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"

// Components
import DemoNav from "./components/demo/DemoNav"
import MarkdownPage from "./components/demo/MarkdownPage"
import NotFound from "./pages/NotFound"
import scrollToTop from "./components/scrollToTop"

import DemoPageLoading from "./components/demo/DemoPageLoading"

// Data
import pages from "./components/demo/pages"

function App() {
    return (
        <>
            <DemoNav />

            <Routes>
                <Route path="*" element={<NotFound />} />

                {pages.map((page, i) => (
                    <Route
                        path={`/${page === "index" ? "" : page.toLowerCase()}`}
                        element={<MarkdownPage content={page.toLowerCase()} />}
                        preload={scrollToTop()}
                        key={i}
                    />
                ))}

                <Route
                    path="/loading-page"
                    element={<DemoPageLoading />}
                    preload={scrollToTop()}
                />
            </Routes>
        </>
    )
}

export default App
