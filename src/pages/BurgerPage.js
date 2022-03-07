// Packages
import React, { useState } from "react"

import Burger from "../components/Burger"

const BurgerPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Burger
            onClick={() => setIsOpen(!isOpen)}
            open={isOpen}
        />
    )
}

export default BurgerPage

