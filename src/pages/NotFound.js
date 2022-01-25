// Packages
import React from "react"
import { Link } from "react-router-dom"

// Components
import * as Font from "../components/styles/Font"

function NotFound(props) {
    return (
        <div>
            <Font.H1>Not found!</Font.H1>

            <Font.P>
                <Link to="/">Back to homepage</Link>
            </Font.P>
        </div>
    )
}

export default NotFound
