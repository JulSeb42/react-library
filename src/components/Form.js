// Packages
import React from "react"
import styled from "styled-components"

// Components
import * as Variables from "./Variables"
import Grid from "./Grid"
import ButtonsContainer from "./ButtonsContainer"
import Button from "./Button"

// Styles
const Container = styled(Grid)`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`

function Form(props) {
    return (
        <Container as="form" gap={Variables.Margins.S} {...props}>
            {props.children}

            {(props.btnprimary || props.btncancel || props.btnreset) && (
                <ButtonsContainer>
                    {props.btnprimary && (
                        <Button
                            btnstyle="plain"
                            color={props.colorprimary || "primary"}
                            iconleft={props.iconleftprimary}
                            iconright={props.iconrightprimary}
                            type="submit"
                            loading={props.loading}
                        >
                            {props.btnprimary}
                        </Button>
                    )}

                    {props.btncancel && (
                        <Button
                            btnstyle="text"
                            color={props.colorcancel || "primary"}
                            iconleft={props.iconleftcancel}
                            iconright={props.iconrightcancel}
                            to={props.btncancel}
                        >
                            {props.textbtncancel || "Cancel"}
                        </Button>
                    )}

                    {props.btnreset && (
                        <Button
                            btnstyle="text"
                            color={props.colorreset || "primary"}
                            iconleft={props.iconleftreset}
                            iconright={props.iconrightreset}
                            type="reset"
                            onClick={props.onClickReset}
                        >
                            {props.textbtnreset || "Reset"}
                        </Button>
                    )}
                </ButtonsContainer>
            )}
        </Container>
    )
}

export default Form
