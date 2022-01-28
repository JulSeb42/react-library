// Packages
import React, { useState } from "react"

import Burger from "../Burger"

function DemoBurger(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Burger
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "open" : ""}
        />
    )
}

export default DemoBurger
