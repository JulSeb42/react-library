// Packages
import React from "react"

import Loader from "../components/Loader"

const LoaderPage = () => {
    return (
        <>
            <Loader
                size={32}
                border={4}
                color="secondary"
                backgroundColor="white"
            />
        </>
    )
}

export default LoaderPage

