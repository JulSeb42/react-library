// Packages
import React from "react"

import CodeContainer from "../components/CodeContainer"

const CodeContainerPage = () => {
    return (
        <CodeContainer language="js">
{`const unslugify = str => {
    return capitalize(str.replaceAll("-", " "))
}`}
        </CodeContainer>
    )
}

export default CodeContainerPage
