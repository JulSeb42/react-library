// Packages
import styled, { css } from "styled-components"
import PropTypes from "prop-types"

// Components
import Variables from "./Variables"
import Grid from "./Grid"

// Styles
const TabsContainer = styled(Grid)`
    width: 100%;
    position: relative;
    gap: ${Variables.Spacers.S};
`

const TabsButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    gap: ${Variables.Spacers.M};
    position: relative;
    padding-bottom: ${Variables.Spacers.XXS};

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

    ${props =>
        props.active &&
        css`
            &:after {
                background-color: ${Variables.Colors.Primary500};
            }
        `}
`

const TabsContent = styled.div`
    display: none;

    ${props =>
        props.active &&
        css`
            display: block;
        `}
`

TabsButtonsContainer.propTypes = {
    col: PropTypes.number.isRequired,
}

TabsButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
}

TabsContent.propTypes = {
    active: PropTypes.bool.isRequired,
}

export { TabsContainer, TabsButtonsContainer, TabsButton, TabsContent }
