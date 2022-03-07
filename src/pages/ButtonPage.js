// Packages
import React from "react"

import * as Font from "../components/Font"
import Button from "../components/Button"
import Grid from "../components/Grid"

const ButtonPage = () => {
    return (
        <>
            <Font.H2>Plain</Font.H2>
            <Grid col={8}>
                <Button btnstyle="plain" color="primary" justify="start">
                    Button
                </Button>
                <Button btnstyle="plain" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnstyle="plain" color="success" justify="start">
                    Button
                </Button>
                <Button btnstyle="plain" color="danger" justify="start">
                    Button
                </Button>
                <Button btnstyle="plain" color="warning" justify="start">
                    Button
                </Button>
                <Button btnstyle="plain" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnstyle="plain"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Text</Font.H2>
            <Grid col={8}>
                <Button btnstyle="text" color="primary" justify="start">
                    Button
                </Button>
                <Button btnstyle="text" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnstyle="text" color="success" justify="start">
                    Button
                </Button>
                <Button btnstyle="text" color="danger" justify="start">
                    Button
                </Button>
                <Button btnstyle="text" color="warning" justify="start">
                    Button
                </Button>
                <Button btnstyle="text" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnstyle="text"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Outline</Font.H2>
            <Grid col={8}>
                <Button btnstyle="outline" color="primary" justify="start">
                    Button
                </Button>
                <Button btnstyle="outline" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnstyle="outline" color="success" justify="start">
                    Button
                </Button>
                <Button btnstyle="outline" color="danger" justify="start">
                    Button
                </Button>
                <Button btnstyle="outline" color="warning" justify="start">
                    Button
                </Button>
                <Button btnstyle="outline" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnstyle="outline"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Icon left</Font.H2>
            <Button
                btnstyle="plain"
                color="primary"
                justify="start"
                iconleft="send"
            >
                Button
            </Button>

            <Font.H2>Icon right</Font.H2>
            <Button
                btnstyle="plain"
                color="primary"
                justify="start"
                iconright="chevron-down"
            >
                Button
            </Button>

            <Font.H2>Loading</Font.H2>
            <Button
                btnstyle="plain"
                color="primary"
                justify="start"
                disabled
                loading={true}
            >
                Button
            </Button>
        </>
    )
}

export default ButtonPage
