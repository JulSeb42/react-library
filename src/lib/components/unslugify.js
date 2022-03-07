import capitalize from "./capitalize"

const unslugify = str => {
    return capitalize(str.replaceAll("-", " "))
}

export default unslugify
