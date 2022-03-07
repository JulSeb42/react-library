// Packages
import React from "react"

import * as Font from "../components/Font"
import Video from "../components/Video"

const VideoPage = () => {
    return (
        <>
            <Font.H2>Autoplay</Font.H2>
            <Video
                src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                autoPlay
            />

            <Font.H2>Controls</Font.H2>
            <Video
                src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                controls
            />

            <Font.H2>Youtube</Font.H2>
            <Video
                youtube="https://www.youtube.com/watch?v=RZsRgBGfXz0"
                aspectRatio="16/9"
            />
        </>
    )
}

export default VideoPage
