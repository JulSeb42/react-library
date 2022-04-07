// Packages
import React from "react"

import { H2, P } from "../components/Font"
import Grid from "../components/Grid"
import Variables from "../components/Variables"
import Button from "../components/Button"
import Avatar from "../components/Avatar"

import {
    capitalize,
    convertDate,
    convertDateShort,
    convertYoutube,
    getFirstName,
    getLastName,
    getRandom,
    getRandomNumber,
    getRandomString,
    getTimeNow,
    getToday,
    scrollToTop,
    slugify,
    unslugify,
    getRandomDate,
    getRandomTime,
    convertToEmail,
    getRandomAvatar,
    calculateTotalSum,
    getRandomCity,
    getRandomLocation,
} from "js-utils-julseb"

const UtilsPage = () => {
    const randomArr = ["Hello", "world", "how", "are", "you"]
    const sum = [3, 30, 42, 2]

    return (
        <>
            <Grid gap={Variables.Spacers.XXS}>
                <H2>Capitalize</H2>
                <P>{capitalize("hello")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Convert date</H2>
                <P>{convertDate("2022-01-28")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Convert date short</H2>
                <P>{convertDateShort("2022-01-28")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Convert YouTube</H2>
                <P>
                    {convertYoutube(
                        "https://www.youtube.com/watch?v=2EaxYi31ips"
                    )}
                </P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get first name</H2>
                <P>{getFirstName("Julien Sebag")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get last name</H2>
                <P>{getLastName("Julien Sebag")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random</H2>
                <P>{getRandom(randomArr)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random number</H2>
                <P>{getRandomNumber(1, 20)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random string</H2>
                <P>{getRandomString(20)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get time now</H2>
                <P>{getTimeNow()}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get today</H2>
                <P>{getToday()}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Scroll to top</H2>
                <Button onClick={() => scrollToTop()} justify="start">
                    Scroll
                </Button>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Slugify</H2>
                <P>{slugify("Hello world how are you? é")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Unslugify</H2>
                <P>{unslugify("hello-world-how-are-you")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random date</H2>
                <P>{getRandomDate(1970, 2022)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random time</H2>
                <P>{getRandomTime(0, 23)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Convert to email</H2>
                <P>{convertToEmail("Julien Sebag")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random avatar</H2>
                <Avatar src={getRandomAvatar("")} />
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Calculate total sum</H2>
                <P>{calculateTotalSum(sum)}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random location</H2>
                <P>{getRandomLocation()}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Get random city with a specified country</H2>
                <P>{getRandomCity("France")}</P>
            </Grid>

            <Grid gap={Variables.Spacers.XXS}>
                <H2>Regex</H2>
                <P>
                    Test if email is valid, or if password contains at least 6
                    chars, 1 uppercase and one lowercase
                </P>
            </Grid>
        </>
    )
}

export default UtilsPage
