// Function to convert YouTube links to embed links for iframe

const convertYoutube = str => {
    return str.replace("watch?v=", "embed/")
}

export default convertYoutube


// https://www.youtube.com/watch?v=RZsRgBGfXz0
// https://www.youtube.com/embed/RZsRgBGfXz0