// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "./Variables"
import Loader from "./Loader"

// Styles
const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props =>
        props.backgroundcolor === "primary"
            ? Variables.Colors.Primary500
            : props.backgroundcolor === "secondary"
            ? Variables.Colors.Secondary500
            : props.backgroundcolor === "success"
            ? Variables.Colors.Success500
            : props.backgroundcolor === "danger"
            ? Variables.Colors.Danger500
            : props.backgroundcolor === "warning"
            ? Variables.Colors.Warning500
            : props.backgroundcolor === "white"
            ? Variables.Colors.White
            : props.backgroundcolor};
`

function PageLoading(props) {
    return (
        <Container backgroundcolor={props.backgroundcolor || "primary"}>
            <Loader
                color={
                    props.backgroundcolor === "white"
                        ? Variables.Colors.Primary500
                        : Variables.Colors.White
                }
                backgroundcolor={props.backgroundcolor || "primary"}
                size={48}
                border={8}
            />
        </Container>
    )
}

export default PageLoading
