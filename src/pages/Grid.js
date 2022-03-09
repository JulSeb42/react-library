// Packages
import React from "react"

import Container from "../components/Grid"
import GridItem from "../components/demo/GridItem"

const Grid = (props) => {
    return (
        <Container col={6}>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
            <GridItem>Col</GridItem>
        </Container>
    )
}

export default Grid
