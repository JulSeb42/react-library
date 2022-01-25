// Packages
import styled from "styled-components"

// Styles
const ColorCard = styled.span`
    --size: 100px;
    width: var(--size);
    height: var(--size);
    display: block;
    background-color: ${props => props.color};
`

export default ColorCard