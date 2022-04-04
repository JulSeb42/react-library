// Packages
import React, { useState } from "react"

import { Select, Item } from "../components/Select"

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
            items={items}
            isOpen={isOpen}
            onClickSelect={() => setIsOpen(!isOpen)}
        >
            {items.map((item, i) => (
                <Item
                    onClick={handleSelect(item)}
                    key={i}
                    selected={selected === item && true}
                >
                    {item}
                </Item>
            ))}
        </Select>
    )
}

export default SelectPage
