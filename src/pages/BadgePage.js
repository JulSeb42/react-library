// Packages
import React from "react"

import * as Font from "../components/Font"
import Grid from "../components/Grid"
import Badge from "../components/Badge"

const BadgePage = () => {
    return (
        <>
            <Font.H2>Empty</Font.H2>
            <Grid col={8}>
                <Badge color="primary" />
                <Badge color="secondary" />
                <Badge color="success" />
                <Badge color="danger" />
                <Badge color="warning" />
            </Grid>

            <Font.H2>With number</Font.H2>
            <Grid col={8}>
                <Badge color="primary" size={32}>
                    1
                </Badge>
                <Badge color="secondary" size={32}>
                    1
                </Badge>
                <Badge color="success" size={32}>
                    1
                </Badge>
                <Badge color="danger" size={32}>
                    1
                </Badge>
                <Badge color="warning" size={32}>
                    1
                </Badge>
            </Grid>

            <Font.H2>With icon</Font.H2>
            <Grid col={8}>
                <Badge color="primary" size={48} icon="star" />
                <Badge color="secondary" size={48} icon="star" />
                <Badge color="success" size={48} icon="star" />
                <Badge color="danger" size={48} icon="star" />
                <Badge color="warning" size={48} icon="star" />
            </Grid>
        </>
    )
}

export default BadgePage
