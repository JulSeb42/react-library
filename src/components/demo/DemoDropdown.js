// Packages
import React, { useState } from "react"

import Button from "../ui/Button"
import Link from "../utils/LinkScroll"
import { DropdownContainer, Dropdown } from "../ui/Dropdown"

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
