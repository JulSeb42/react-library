// Packages
import React from "react"
import styled from "styled-components"

// Components
import Variables from "./Variables"
import Grid from "./Grid"
import ButtonsContainer from "./ButtonsContainer"
import Button from "./Button"

// Styles
const Container = styled(Grid)`
    width: 100%;
    margin: 0 auto;
`

const Form = props => {
    return (
        <Container as="form" gap={Variables.Spacers.S} {...props}>
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
                            disabled={props.loading}
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

                    {props.textbtnreset && (
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
