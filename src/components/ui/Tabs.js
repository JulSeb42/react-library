// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

// Styles
const TabsContainer = styled.div`
    width: 100%;
    position: relative;
`

const TabsButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    gap: ${Variables.Margins.M};
    position: relative;
    padding-bottom: ${Variables.Margins.XXS};

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: ${Variables.Colors.Gray100};
        z-index: 1;
    }
`

const TabsButton = styled.button`
    text-align: left;
    background: none;
    border: none;
    font-size: ${Variables.FontSizes.Body};
    padding: 0;
    position: relative;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 100%;
        height: 2px;
        background-color: transparent;
        z-index: 2;
    }

    &.active:after {
        background-color: ${Variables.Colors.Primary500};
    }
`

const TabsContent = styled.div`
    display: none;
    margin-top: ${Variables.Margins.S};

    &.active {
        display: block;
    }
`

export { TabsContainer, TabsButtonsContainer, TabsButton, TabsContent }
