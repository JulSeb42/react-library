const getLastName = str => {
    const split = str.split(" ")
    return split[split.length - 1]
}

export default getLastName
