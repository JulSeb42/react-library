// Packages
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: ${props =>
        props.template === "1col"
            ? Variables.Container.Template1Col
            : props.template === "aside-left"
            ? Variables.Container.TemplateAsideLeft
            : props.template === "aside-right"
            ? Variables.Container.TemplateAsideRight
            : props.template === "form"
            ? Variables.Container.TemplateForm
            : props.template === "both-sides"
            ? Variables.Container.TemplateBothSides
            : "" || Variables.Container.Template1Col};
    padding: ${Variables.Container.Padding};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }

    ${props =>
        (props.template === "aside-left" || props.template === "aside-right") &&
        css`
            gap: ${Variables.Margins.L};
        `}
`

export default Wrapper
