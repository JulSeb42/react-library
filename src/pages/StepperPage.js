// Packages
import React from "react"

import Stepper from "../components/Stepper"

const StepperPage = () => {
    const steps = [
        {
            text: "Step",
            to: "#",
        },
        {
            text: "Step",
            to: "#",
        },
        {
            text: "Step",
            to: "#",
        },
        {
            text: "Step",
            to: "#",
        },
    ]
    return <Stepper active={2} steps={steps} />
}

export default StepperPage
