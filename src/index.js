import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

// Components
import App from "./App"

// Styles
import "./components/index.css"

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
)
