// Packages
import React from "react"

// Components
import Grid from "../components/Grid"
import ColorCard from "../components/demo/ColorCard"

// Data
const allColors = [
    { name: "Black", rgb: "rgb(0,0,0)" },
    { name: "White", rgb: "rgb(255,255,255)" },
    { name: "Gray50", rgb: "rgb(248,248,248)" },
    { name: "Gray100", rgb: "rgb(228,228,228)" },
    { name: "Gray200", rgb: "rgb(200,200,200)" },
    { name: "Gray300", rgb: "rgb(173,173,173)" },
    { name: "Gray400", rgb: "rgb(145,145,145)" },
    { name: "Gray500", rgb: "rgb(118,118,118)" },
    { name: "Gray600", rgb: "rgb(94,94,94)" },
    { name: "Gray700", rgb: "rgb(71,71,71)" },
    { name: "Gray800", rgb: "rgb(47,47,47)" },
    { name: "Gray900", rgb: "rgb(24,24,24)" },
    { name: "Primary50", rgb: "rgb(244,246,247)" },
    { name: "Primary100", rgb: "rgb(209,218,225)" },
    { name: "Primary200", rgb: "rgb(164,181,195)" },
    { name: "Primary300", rgb: "rgb(118,143,164)" },
    { name: "Primary400", rgb: "rgb(73,106,134)" },
    { name: "Primary500", rgb: "rgb(27,69,104)" },
    { name: "Primary600", rgb: "rgb(22,55,83)" },
    { name: "Primary700", rgb: "rgb(16,41,62)" },
    { name: "Primary800", rgb: "rgb(11,28,42)" },
    { name: "Primary900", rgb: "rgb(5,14,21)" },
    { name: "Secondary50", rgb: "rgb(244,248,253)" },
    { name: "Secondary100", rgb: "rgb(212,226,246)" },
    { name: "Secondary200", rgb: "rgb(168,197,237)" },
    { name: "Secondary300", rgb: "rgb(125,167,229)" },
    { name: "Secondary400", rgb: "rgb(81,138,220)" },
    { name: "Secondary500", rgb: "rgb(38,109,211)" },
    { name: "Secondary600", rgb: "rgb(30,87,169)" },
    { name: "Secondary700", rgb: "rgb(23,65,127)" },
    { name: "Secondary800", rgb: "rgb(15,44,84)" },
    { name: "Secondary900", rgb: "rgb(8,22,42)" },
    { name: "Success50", rgb: "rgb(243,249,246)" },
    { name: "Success100", rgb: "rgb(206,230,219)" },
    { name: "Success200", rgb: "rgb(157,205,183)" },
    { name: "Success300", rgb: "rgb(107,179,146)" },
    { name: "Success400", rgb: "rgb(58,154,110)" },
    { name: "Success500", rgb: "rgb(9,129,74)" },
    { name: "Success600", rgb: "rgb(7,103,59)" },
    { name: "Success700", rgb: "rgb(5,77,44)" },
    { name: "Success800", rgb: "rgb(4,52,30)" },
    { name: "Success900", rgb: "rgb(2,26,15)" },
    { name: "Danger50", rgb: "rgb(251,242,244)" },
    { name: "Danger100", rgb: "rgb(240,204,209)" },
    { name: "Danger200", rgb: "rgb(225,153,164)" },
    { name: "Danger300", rgb: "rgb(209,102,118)" },
    { name: "Danger400", rgb: "rgb(194,51,73)" },
    { name: "Danger500", rgb: "rgb(179,0,27)" },
    { name: "Danger600", rgb: "rgb(143,0,22)" },
    { name: "Danger700", rgb: "rgb(107,0,16)" },
    { name: "Danger800", rgb: "rgb(72,0,11)" },
    { name: "Danger900", rgb: "rgb(36,0,5)" },
    { name: "Warning50", rgb: "rgb(252,246,242)" },
    { name: "Warning100", rgb: "rgb(243,219,204)" },
    { name: "Warning200", rgb: "rgb(231,182,153)" },
    { name: "Warning300", rgb: "rgb(220,146,102)" },
    { name: "Warning400", rgb: "rgb(208,109,51)" },
    { name: "Warning500", rgb: "rgb(196,73,0)" },
    { name: "Warning600", rgb: "rgb(157,58,0)" },
    { name: "Warning700", rgb: "rgb(118,44,0)" },
    { name: "Warning800", rgb: "rgb(78,29,0)" },
    { name: "Warning900", rgb: "rgb(39,15,0)" },
]

const Colors = () => {
    return (
        <Grid col={3}>
            {allColors.map((color, i) => (
                <ColorCard color={color} key={i} />
            ))}
        </Grid>
    )
}

export default Colors
