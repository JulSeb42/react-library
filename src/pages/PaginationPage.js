// Packages
import React from "react"

import { Pagination, PaginationButton } from "../components/Pagination"

const PaginationPage = () => {
    return (
        <Pagination>
            <PaginationButton prev disabled />
            <PaginationButton number={1} active />
            <PaginationButton number={2} />
            <PaginationButton number={3} />
            <PaginationButton number={4} />
            <PaginationButton number={5} />
            <PaginationButton more />
            <PaginationButton number={20} />
            <PaginationButton next />
        </Pagination>
    )
}

export default PaginationPage
