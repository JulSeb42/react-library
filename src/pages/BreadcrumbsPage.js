// Packages
import React from "react"

import { Breadcrumbs, BreadcrumbsItem } from "../components/Breadcrumbs"

const BreadcrumbsPage = () => {
    return (
        <>
            <Breadcrumbs icon="chevron-right">
                <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                <BreadcrumbsItem to="#">Link</BreadcrumbsItem>
                <BreadcrumbsItem>Active</BreadcrumbsItem>
            </Breadcrumbs>
        </>
    )
}

export default BreadcrumbsPage
