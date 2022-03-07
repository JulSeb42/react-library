// Packages
import React from "react"

import * as Font from "../components/Font"
import Avatar from "../components/Avatar"

const AvatarPage = () => {
    return (
        <>
            <Font.H2>Picture</Font.H2>
            <Avatar
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
                alt="Avatar"
            />

            <Font.H2>Letter</Font.H2>
            <Avatar>A</Avatar>

            <Font.H2>Icon</Font.H2>
            <Avatar icon="user" />
        </>
    )
}

export default AvatarPage

