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
                <Button btnStyle="plain" color="primary" justify="start">
                    Button
                </Button>
                <Button btnStyle="plain" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnStyle="plain" color="success" justify="start">
                    Button
                </Button>
                <Button btnStyle="plain" color="danger" justify="start">
                    Button
                </Button>
                <Button btnStyle="plain" color="warning" justify="start">
                    Button
                </Button>
                <Button btnStyle="plain" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnStyle="plain"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Text</Font.H2>
            <Grid col={8}>
                <Button btnStyle="text" color="primary" justify="start">
                    Button
                </Button>
                <Button btnStyle="text" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnStyle="text" color="success" justify="start">
                    Button
                </Button>
                <Button btnStyle="text" color="danger" justify="start">
                    Button
                </Button>
                <Button btnStyle="text" color="warning" justify="start">
                    Button
                </Button>
                <Button btnStyle="text" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnStyle="text"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Outline</Font.H2>
            <Grid col={8}>
                <Button btnStyle="outline" color="primary" justify="start">
                    Button
                </Button>
                <Button btnStyle="outline" color="secondary" justify="start">
                    Button
                </Button>
                <Button btnStyle="outline" color="success" justify="start">
                    Button
                </Button>
                <Button btnStyle="outline" color="danger" justify="start">
                    Button
                </Button>
                <Button btnStyle="outline" color="warning" justify="start">
                    Button
                </Button>
                <Button btnStyle="outline" color="white" justify="start">
                    Button
                </Button>
                <Button
                    btnStyle="outline"
                    color="primary"
                    justify="start"
                    disabled
                >
                    Button
                </Button>
            </Grid>

            <Font.H2>Icon left</Font.H2>
            <Button
                btnStyle="plain"
                color="primary"
                justify="start"
                iconLeft="send"
            >
                Button
            </Button>

            <Font.H2>Icon right</Font.H2>
            <Button
                btnStyle="plain"
                color="primary"
                justify="start"
                iconRight="chevron-down"
            >
                Button
            </Button>

            <Font.H2>Loading</Font.H2>
            <Button
                btnStyle="plain"
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
