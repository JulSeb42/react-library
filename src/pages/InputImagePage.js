// Packages
import React, { useState } from "react"

import InputImage from "../components/InputImage"

const InputImagePage = () => {
    const [image, setImage] = useState("")

    const handleImage = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setImage(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <InputImage
            label="Image"
            src={image}
            alt="Alt"
            onChange={e => handleImage(e)}
            id="image"
        />
    )
}

export default InputImagePage

