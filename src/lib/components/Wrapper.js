// Packages
import styled from "styled-components"

// Components
import * as Variables from "./Variables"

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
            : "" || Variables.Container.Template1Col};
    padding: ${Variables.Container.Padding};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }
`

export default Wrapper
