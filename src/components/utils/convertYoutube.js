// Function to convert YouTube links to embed links for iframe

const convertYoutube = str => {
    return str.replace("watch?v=", "embed/")
}

export default convertYoutube
