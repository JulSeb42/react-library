// Packages
import React from "react"

import Grid from "../components/Grid"
import CardShadow from "../components/demo/CardShadows"

// All shadows
const allShadows = [
    { name: "XXL", shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)" },
    {
        name: "XL",
        shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    },
    {
        name: "L",
        shadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
    {
        name: "M",
        shadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    },
    {
        name: "S",
        shadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    },
    { name: "XS", shadow: "0 1px 2px 0 rgb(0 0 0 / 0.05)" },
]

const Shadows = () => {
    return (
        <Grid col={4}>
            {allShadows.map((shadow, i) => (
                <CardShadow shadow={shadow} key={i} />
            ))}
        </Grid>
    )
}

export default Shadows
