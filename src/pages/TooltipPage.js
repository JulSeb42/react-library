// Packages
import React from "react"

import * as Font from "../components/Font"
import Tooltip from "../components/Tooltip"

const TooltipPage = () => {
    return (
        <Font.P>
            Text with <Tooltip text="Tooltip">tooltip</Tooltip> text
        </Font.P>
    )
}

export default TooltipPage
