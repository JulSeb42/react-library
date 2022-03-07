// Packages
import { css } from "styled-components"

// Styles
const IconMixin = ({ icon, size, color }) => css`
    content: "";
    mask: url("/icons/${icon}.svg") no-repeat 50% 50%;
    mask-size: cover;
    background-color: ${color || "currentColor"};
    display: inline-block;
    width: ${size}px;
    height: ${size}px;
`

export default IconMixin

// How to use the mixin
// Import in the file you want to use this component
// import { IconMixin } from "/path/to/Icon"
// div:before {
//     ${IconMixin({
//         icon: "name-of-icon",
//         size: "12px",
//         color: "black",
//     })}
// }
