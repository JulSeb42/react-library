// Packages
import React from "react"
import styled from "styled-components"

import * as Font from "../styles/Font"
import CodeContainer from "./CodeContainer"

import getToday from "../utils/getToday"
import getFirstName from "../utils/getFirstName"
import convertDate from "../utils/convertDate"
import convertDateShort from "../utils/convertDateShort"
import getTimeNow from "../utils/getTimeNow"
import slugify from "../utils/slugify"
import getRandom from "../utils/getRandom"
import getRandomNumber from "../utils/getRandomNumber"
import getRandomString from "../utils/getRandomString"

const ItemContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
`

function Item(props) {
    return (
        <ItemContainer>
            <Font.H4>{props.title}</Font.H4>
            <Font.P>{props.children}</Font.P>
            <CodeContainer>{props.code}</CodeContainer>
        </ItemContainer>
    )
}

function DemoUtils(props) {
    const arr = ["Hello", "world", "how", "are", "you"]

    return (
        <>
            <Item title="Get today" code="getToday()">
                {getToday()}
            </Item>

            <Item title="Get first name" code="getFirstName('Julien Sebag')">
                {getFirstName("Julien Sebag")}
            </Item>

            <Item title="Convert date" code="convertDate('2022-01-28')">
                {convertDate("2022-01-28")}
            </Item>

            <Item
                title="Convert date short"
                code="convertDateShort('2022-01-28')"
            >
                {convertDateShort("2022-01-28")}
            </Item>

            <Item title="Get time" code="getTimeNow()">
                {getTimeNow()}
            </Item>

            <Item title="Slugify" code="getTimeNow()">
                {getTimeNow()}
            </Item>

            <Item title="Slugify" code="slugify('Hello World! é')">
                {slugify("Hello World! é")}
            </Item>

            <Item title="getRandom" code="getRandom(arr)">
                const arr = ["Hello", "world", "how", "are", "you"]
                <br />
                {getRandom(arr)}
            </Item>

            <Item title="getRandomNumber" code="getRandom(max)">
                {getRandomNumber(500)}
            </Item>

            <Item
                title="getRandomString"
                code="getRandomString(number_of_characters)"
            >
                {getRandomString(20)}
            </Item>
        </>
    )
}

export default DemoUtils
