// Packages
import React, { useState } from "react"
import { Link } from "react-router-dom"

import { DropdownContainer, Dropdown } from "../components/Dropdown"
import Button from "../components/Button"

const DropdownPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer>
            <Button
                btnstyle="plain"
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open dropdown
            </Button>

            <Dropdown open={isOpen}>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Dropdown>
        </DropdownContainer>
    )
}

export default DropdownPage

