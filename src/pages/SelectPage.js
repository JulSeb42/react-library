// Packages
import React, { useState } from "react"

import { Select, SelectItem } from "../components/Select"

const SelectPage = () => {
    // Items
    const items = ["react", "javascript", "scss", "css", "html"]

    // Handle
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState(items[0])

    const handleSelect = value => () => {
        setSelected(value)
        setIsOpen(false)
    }

    return (
        <Select
            selected={selected}
            isOpen={isOpen}
            onClickSelect={() => setIsOpen(!isOpen)}
        >
            {items.map((item, i) => (
                <SelectItem
                    onClick={handleSelect(item)}
                    key={i}
                    selected={selected === item && true}
                >
                    {item}
                </SelectItem>
            ))}
        </Select>
    )
}

export default SelectPage
