// Packages
import React from "react"

// Components
import * as Font from "../components/styles/Font"
import Grid from "../components/layouts/Grid"
import ColorCard from "../components/demo/ColorCard"

const allColors = [
    "rgb(0,0,0)",
    "rgb(255,255,255)",
    "rgb(248,248,248)",
    "rgb(228,228,228)",
    "rgb(200,200,200)",
    "rgb(173,173,173)",
    "rgb(145,145,145)",
    "rgb(118,118,118)",
    "rgb(94,94,94)",
    "rgb(71,71,71)",
    "rgb(47,47,47)",
    "rgb(24,24,24)",
    "rgb(244,246,247)",
    "rgb(209,218,225)",
    "rgb(164,181,195)",
    "rgb(118,143,164)",
    "rgb(73,106,134)",
    "rgb(27,69,104)",
    "rgb(22,55,83)",
    "rgb(16,41,62)",
    "rgb(11,28,42)",
    "rgb(5,14,21)",
    "rgb(244,248,253)",
    "rgb(212,226,246)",
    "rgb(168,197,237)",
    "rgb(125,167,229)",
    "rgb(81,138,220)",
    "rgb(38,109,211)",
    "rgb(30,87,169)",
    "rgb(23,65,127)",
    "rgb(15,44,84)",
    "rgb(8,22,42)",
    "rgb(243,249,246)",
    "rgb(206,230,219)",
    "rgb(157,205,183)",
    "rgb(107,179,146)",
    "rgb(58,154,110)",
    "rgb(9,129,74)",
    "rgb(7,103,59)",
    "rgb(5,77,44)",
    "rgb(4,52,30)",
    "rgb(2,26,15)",
    "rgb(251,242,244)",
    "rgb(240,204,209)",
    "rgb(225,153,164)",
    "rgb(209,102,118)",
    "rgb(194,51,73)",
    "rgb(179,0,27)",
    "rgb(143,0,22)",
    "rgb(107,0,16)",
    "rgb(72,0,11)",
    "rgb(36,0,5)",
    "rgb(252,246,242)",
    "rgb(243,219,204)",
    "rgb(231,182,153)",
    "rgb(220,146,102)",
    "rgb(208,109,51)",
    "rgb(196,73,0)",
    "rgb(157,58,0)",
    "rgb(118,44,0)",
    "rgb(78,29,0)",
    "rgb(39,15,0)",
]

function Colors(props) {
    return (
        <Grid>
            <Font.H1>Colors</Font.H1>

            <Grid col={12}>
                {allColors.map((color, i) => (
                    <ColorCard color={color} key={i} />
                ))}
            </Grid>
        </Grid>
    )
}

export default Colors
