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

            {(props.btnPrimary || props.btnCancel || props.btnReset) && (
                <ButtonsContainer>
                    {props.btnPrimary && (
                        <Button
                            btnstyle="plain"
                            color={props.colorPrimary || "primary"}
                            iconleft={props.iconLeftPrimary}
                            iconright={props.iconRightPrimary}
                            type="submit"
                            loading={props.loading}
                            disabled={props.loading}
                        >
                            {props.btnPrimary}
                        </Button>
                    )}

                    {props.btnCancel && (
                        <Button
                            btnstyle="text"
                            color={props.colorCancel || "primary"}
                            iconleft={props.iconLeftCancel}
                            iconright={props.iconRightCancel}
                            to={props.btnCancel}
                        >
                            {props.textBtnCancel || "Cancel"}
                        </Button>
                    )}

                    {props.textBtnReset && (
                        <Button
                            btnstyle="text"
                            color={props.colorReset || "primary"}
                            iconleft={props.iconLeftReset}
                            iconright={props.iconRightReset}
                            type="reset"
                            onClick={props.onClickReset}
                        >
                            {props.textBtnReset || "Reset"}
                        </Button>
                    )}
                </ButtonsContainer>
            )}
        </Container>
    )
}

export default Form
