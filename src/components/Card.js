// Packages
import React from "react"
import styled, { css } from "styled-components"

// Components
import Variables from "./Variables"
import * as Font from "./Font"
import Button from "./Button"
import Icon from "./Icon"
import Link from "./LinkScroll"
import Image from "./Image"

// Styles
const BasicContainer = styled.div`
    background-color: ${Variables.Colors.White};
    padding: ${Variables.Margins.M};
    box-shadow: ${Variables.Shadows.S};
    border-radius: ${Variables.Radiuses.M};
    max-width: 300px;
    text-decoration: none;
    color: ${Variables.Colors.Black};

    ${props =>
        props.direction === "portrait" &&
        css`
            display: grid;
            gap: ${Variables.Margins.XS};
            justify-items: center;
        `}

    ${props =>
        props.direction === "landscape" &&
        css`
            display: flex;
            align-items: center;

            .icon {
                margin-right: ${Variables.Margins.S};
            }
        `}
    
    ${props =>
        props.to &&
        css`
            transition: ${Variables.Transitions.Short};

            &:hover {
                transform: scale(1.01);
                box-shadow: ${Variables.Shadows.M};
            }
        `}
`

const BasicContent = styled.div`
    display: grid;
    gap: ${Variables.Margins.XS};
`

const ImageContainer = styled.div`
    width: 100%;
    max-width: 300px;
    height: 12vw;
    min-height: 150px;
    overflow: hidden;
    border-radius: ${Variables.Radiuses.M};
    box-shadow: ${Variables.Shadows.S};
    text-decoration: none;
    color: ${Variables.Colors.White};
    position: relative;

    &:after {
        content: "";
        background-color: ${Variables.Overlays.Plain.Black50};
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
    }

    & > .lazyload-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;

        img {
            width: 100%;
            height: 100%;
        }
    }

    ${props =>
        props.to &&
        css`
            transition: ${Variables.Transitions.Short};

            &:hover {
                transform: scale(1.01);
                box-shadow: ${Variables.Shadows.M};
            }
        `}
`

const ContentImage = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 3;
    padding: ${Variables.Margins.S};
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    flex-direction: column;
`

// Functions
function FunctionBasicContent(props) {
    return (
        <>
            {props.title && <Font.H4>{props.title}</Font.H4>}

            {props.subtitle && <Font.P>{props.subtitle}</Font.P>}

            {props.button && (
                <Button
                    btnstyle={props.btnstyle || "plain"}
                    color={props.btncolor || "primary"}
                    iconleft={props.btniconleft}
                    iconright={props.btniconright}
                    to={props.btnto}
                    onClick={props.onClickButton}
                    nopadding={props.btnnopadding}
                >
                    {props.button}
                </Button>
            )}
        </>
    )
}

function BasicCard(props) {
    return (
        <BasicContainer
            direction={props.direction}
            as={props.to && Link}
            to={props.to}
            {...props}
        >
            {props.icon && (
                <Icon
                    name={props.icon}
                    color={props.iconcolor}
                    size={props.iconsize || 32}
                    className="icon"
                />
            )}

            {(props.title || props.subtitle || props.button) &&
                (props.direction === "portrait" ? (
                    <FunctionBasicContent
                        title={props.title}
                        subtitle={props.subtitle}
                        button={props.button}
                        btnstyle={props.btnstyle}
                        btncolor={props.btncolor}
                        btniconleft={props.btniconleft}
                        btniconright={props.btniconright}
                        btnto={props.btnto}
                        onClickButton={props.onClickButton}
                        btnnopadding={props.btnnopadding}
                    />
                ) : (
                    <BasicContent>
                        <FunctionBasicContent
                            title={props.title}
                            subtitle={props.subtitle}
                            button={props.button}
                            btnstyle={props.btnstyle}
                            btncolor={props.btncolor}
                            btniconleft={props.btniconleft}
                            btniconright={props.btniconright}
                            btnto={props.btnto}
                            onClickButton={props.onClickButton}
                            btnnopadding={props.btnnopadding}
                        />
                    </BasicContent>
                ))}
        </BasicContainer>
    )
}

function ImageCard(props) {
    return (
        <ImageContainer to={props.to} as={props.to && Link} {...props}>
            <Image src={props.src} alt={props.alt} fit="cover" />

            {(props.title || props.subtitle) && (
                <ContentImage>
                    {props.title && <Font.H4>{props.title}</Font.H4>}

                    {props.subtitle && <Font.P>{props.subtitle}</Font.P>}
                </ContentImage>
            )}
        </ImageContainer>
    )
}

export { BasicCard, ImageCard, }
