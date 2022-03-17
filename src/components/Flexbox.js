// Packages
import styled, { css } from "styled-components"

// Styles
const Flexbox = styled.div`
    display: flex;
    align-items: ${props => props.align || "flex-start"};
    justify-content: ${props => props.justify || "flex-start"};
    flex-direction: ${props => props.direction || "row"};

    & > *:not(:last-child) {
        ${props =>
            props.direction === "row" &&
            css`
                margin-right: ${props => props.gap || 0};
            `}

        ${props =>
            props.direction === "row-reverse" &&
            css`
                margin-left: ${props => props.gap || 0};
            `}

        ${props =>
            props.direction === "column" &&
            css`
                margin-bottom: ${props => props.gap || 0};
            `}
        
        ${props =>
            props.direction === "column-reverse" &&
            css`
                margin-top: ${props => props.gap || 0};
            `}
    }
`

export default Flexbox
