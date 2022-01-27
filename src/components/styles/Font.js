// Packages
import styled, { css } from "styled-components"

// Components
import * as Variables from "./Variables"

// Styles
// Styles
export const H1 = styled.h1`
    font-size: ${Variables.FontSizes.Titles.ExtraLarge};
    font-weight: ${Variables.FontWeights.Black};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H1};
        `}
`

export const H2 = styled.h2`
    font-size: ${Variables.FontSizes.Titles.Large};
    font-weight: ${Variables.FontWeights.Black};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H2};
        `}
`

export const H3 = styled.h3`
    font-size: ${Variables.FontSizes.Titles.Large};
    font-weight: ${Variables.FontWeights.Bold};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-weight: ${Variables.FontWeights.Black};
            font-size: ${Variables.FontSizes.Display.H3};
        `}
`

export const H4 = styled.h4`
    font-size: ${Variables.FontSizes.Titles.Medium};
    font-weight: ${Variables.FontWeights.Black};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-size: ${Variables.FontSizes.Display.H4};
        `}
`

export const H5 = styled.h5`
    font-size: ${Variables.FontSizes.Titles.Medium};
    font-weight: ${Variables.FontWeights.Bold};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }

    ${props =>
        props.display &&
        css`
            font-weight: ${Variables.FontWeights.Black};
            font-size: ${Variables.FontSizes.Display.H5};
        `}
`

export const H6 = styled.h6`
    font-size: ${Variables.FontSizes.Titles.Small};
    font-weight: ${Variables.FontWeights.Black};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

export const P = styled.p`
    font-size: ${Variables.FontSizes.Body};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};
        font-weight: ${Variables.FontWeights.Bold};

        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

export const Small = styled.small`
    font-size: ${Variables.FontSizes.Small};
    font-style: italic;
    color: ${Variables.Colors.Gray500};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};
        font-weight: ${Variables.FontWeights.Bold};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

export const Strong = styled.strong`
    font-weight: ${Variables.FontWeights.Bold};

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

export const Em = styled.em`
    font-style: italic;

    a {
        color: ${Variables.Colors.Primary500};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.Colors.Primary700};
        }

        &.active {
            color: ${Variables.Colors.Primary600};
        }
    }
`

export const List = styled.ul`
    padding: 0;
    margin: 0;
    font-size: ${Variables.FontSizes.Body};
    padding-left: ${Variables.Margins.S};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XS};
    list-style: none;

    li {
        padding-inline-start: ${Variables.Margins.XS};
        line-height: calc(
            ${Variables.LineHeight} * ${Variables.FontSizes.Body}
        );

        a {
            color: ${Variables.Colors.Primary500};
            text-decoration: none;
            transition: ${Variables.Transitions.Short};
            font-weight: ${Variables.FontWeights.Bold};

            &:hover {
                color: ${Variables.Colors.Primary700};
            }

            &.active {
                color: ${Variables.Colors.Primary600};
            }
        }

        &::marker {
            content: url(/icons/list-marker.svg);
        }
    }
`
