// Packages
import styled from "styled-components"

// Components
import * as Variables from "./Variables"

// Styles
const DropdownContainer = styled.div`
    position: relative;
`

const Dropdown = styled.div`
    position: absolute;
    left: 0;
    top: 42px;
    list-style: none;
    background-color: ${Variables.Colors.White};
    box-shadow: ${Variables.Shadows.S};
    min-width: 150px;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    border-radius: ${Variables.Radiuses.M};
    max-height: 0;
    overflow: hidden;
    transition: ${Variables.Transitions.Long};
    z-index: 10;

    & > a {
        padding: ${Variables.Margins.XS};
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        font-weight: ${Variables.FontWeights.Bold};
        transition: ${Variables.Transitions.Short};

        &:hover {
            background-color: ${Variables.Colors.Primary500};
            color: ${Variables.Colors.White};
        }
    }

    &.open {
        max-height: 800px;
    }
`

export { DropdownContainer, Dropdown }
