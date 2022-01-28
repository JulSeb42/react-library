// Packages
import React from "react"

import {
    Breadcrumbs,
    BreadcrumbsLink,
    BreadcrumbsActive,
} from "../Breadcrumbs"

function DemoBreadcrumbs() {
    return (
        <Breadcrumbs>
            <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
            <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
            <BreadcrumbsLink to="#">Link</BreadcrumbsLink>
            <BreadcrumbsActive>Active</BreadcrumbsActive>
        </Breadcrumbs>
    )
}

export default DemoBreadcrumbs