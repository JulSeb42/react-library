// Packages
import React, { useState } from "react"

import Modal from "../components/Modal"
import Button from "../components/Button"
import Image from "../components/Image"

const ModalPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)} justify="start">
                Open modal
            </Button>

            <Modal open={isOpen} close={() => setIsOpen(!isOpen)}>
                <Image src="https://images.unsplash.com/photo-1643274922790-510cb79a9d2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" />
            </Modal>
        </>
    )
}

export default ModalPage
