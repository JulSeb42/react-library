// Packages
import React from "react"

// Components
import * as Font from "../components/styles/Font"
import * as Variables from "../components/styles/Variables"
import Grid from "../components/layouts/Grid"

function Fonts(props) {
    return (
        <Grid>
            <Grid gap={Variables.Margins.XS}>
                <Font.H1 display>Title H1 display</Font.H1>
                <Font.H2 display>Title H2 display</Font.H2>
                <Font.H3 display>Title H3 display</Font.H3>
                <Font.H4 display>Title H4 display</Font.H4>
                <Font.H5 display>Title H5 display</Font.H5>
            </Grid>

            <Grid gap={Variables.Margins.XS}>
                <Font.H1>Title H1</Font.H1>
                <Font.H2>Title H2</Font.H2>
                <Font.H3>Title H3</Font.H3>
                <Font.H4>Title H4</Font.H4>
                <Font.H5>Title H5</Font.H5>
                <Font.H6>Title H6</Font.H6>
            </Grid>

            <Grid gap={Variables.Margins.XS}>
                <Font.P>Paragraph</Font.P>

                <Font.P>
                    <Font.Strong>Paragraph strong</Font.Strong>
                </Font.P>

                <Font.P>
                    <Font.Em>Paragraph italic</Font.Em>
                </Font.P>
            </Grid>

            <Grid gap={Variables.Margins.XS}>
                <Font.Small>Small</Font.Small>
            </Grid>

            <Grid gap={Variables.Margins.XS}>
                <Font.List>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                    <li>List</li>
                </Font.List>
            </Grid>
        </Grid>
    )
}

export default Fonts
