// Packages
import React from "react"
import styled from "styled-components"

// Styles
const Container = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
`

const SrOnly = props => {
    return <Container {...props}>{props.children}</Container>
}

export default SrOnly
