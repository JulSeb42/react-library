// Packages
import styled from "styled-components"

// Components
import Variables from "./Variables"

// Styles
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col || 1}, 1fr);
    gap: ${props => props.gap || Variables.Spacers.L};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: repeat(
            ${props =>
                props.col >= 6
                    ? 4
                    : props.col === 5 || props.col === 4
                    ? 3
                    : props.col === 3 || props.col === 2
                    ? 2
                    : 1},
            1fr
        );
    }

    @media ${Variables.Breakpoints.Mobile} {
        grid-template-columns: repeat(
            ${props => (props.col >= 6 ? 2 : 1)},
            1fr
        );
    }
    }
`

export default Grid
