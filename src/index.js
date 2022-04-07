import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

// Components
import App from "./App"

// Styles
import "./components/index.css"

const root = createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
