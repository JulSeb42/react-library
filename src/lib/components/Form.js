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
                            btnStyle="plain"
                            color={props.colorPrimary || "primary"}
                            iconLeft={props.iconLeftPrimary}
                            iconRight={props.iconRightPrimary}
                            type="submit"
                            loading={props.loading}
                            disabled={props.loading}
                        >
                            {props.btnPrimary}
                        </Button>
                    )}

                    {props.btnCancel && (
                        <Button
                            btnStyle="text"
                            color={props.colorCancel || "primary"}
                            iconLeft={props.iconLeftCancel}
                            iconRight={props.iconRightCancel}
                            to={props.btnCancel}
                        >
                            {props.textBtnCancel || "Cancel"}
                        </Button>
                    )}

                    {(props.btnReset || props.textBtnReset) && (
                        <Button
                            btnStyle="text"
                            color={props.colorReset || "primary"}
                            iconLeft={props.iconLeftReset}
                            iconRight={props.iconRightReset}
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
