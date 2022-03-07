// Packages
import React from "react"

import * as Font from "../components/Font"

import Wrapper from "../components/Wrapper"
import Main from "../components/Main"
import Aside from "../components/Aside"

const Container = props => {
    return (
        <>
            <Font.H2>Main only</Font.H2>

            <Wrapper>
                <Main>Main</Main>
            </Wrapper>

            <Font.H2>Main form</Font.H2>

            <Wrapper template="form">
                <Main>Main form</Main>
            </Wrapper>

            <Font.H2>Main aside left</Font.H2>

            <Wrapper template="aside-left">
                <Aside template="aside-left">Aside</Aside>

                <Main template="aside-left">Main</Main>
            </Wrapper>

            <Font.H2>Main aside right</Font.H2>

            <Wrapper template="aside-right">
                <Main template="aside-right">Main</Main>

                <Aside template="aside-right">Aside</Aside>
            </Wrapper>

            <Font.H2>Main both sides</Font.H2>

            <Wrapper template="both-sides">
                <Aside template="both-sides">Aside</Aside>
                
                <Main template="both-sides">Main</Main>
                
                <Aside template="both-sides" last>
                    Aside
                </Aside>
            </Wrapper>
        </>
    )
}

export default Container
