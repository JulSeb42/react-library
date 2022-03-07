// Packages
import React from "react"
import { Helmet as HelmetMeta } from "react-helmet"
import PropTypes from "prop-types"

const Helmet = props => {
    return (
        <HelmetMeta>
            <title>{props.title}</title>
            <link rel="icon" href={props.favicon} />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={props.description} />
            <meta name="keywords" content={props.keywords} />
            <meta name="author" content={props.author} />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content={props.type} />
            <meta property="og:image" content={props.cover} />
            <meta property="og:site_name" content={props.siteName} />
            <meta property="og:locale" content={props.language} />

            {props.children}
        </HelmetMeta>
    )
}

Helmet.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Helmet
