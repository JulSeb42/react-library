// Packages
import React, { useState } from "react"

import Button from "../Button"
import Link from "../LinkScroll"
import { DropdownContainer, Dropdown } from "../Dropdown"

function DemoDropdown() {
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

            <Dropdown className={isOpen ? "open" : ""}>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Dropdown>
        </DropdownContainer>
    )
}

export default DemoDropdown
