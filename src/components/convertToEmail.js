import slugify from "./slugify"

const convertToEmail = (name, domain) => {
    return `${slugify(name).replace("-", ".")}@${domain || "email.com"}`
}

export default convertToEmail
