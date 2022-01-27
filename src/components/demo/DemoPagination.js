// Packages
import React from "react"

import { Pagination, PaginationButton } from "../ui/Pagination"

function DemoPagination(props) {
    return (
        <Pagination>
            <PaginationButton icon="previous" disabled />
            <PaginationButton number={1} className="active" />
            <PaginationButton number={2} />
            <PaginationButton number={3} />
            <PaginationButton number={4} />
            <PaginationButton number={5} />
            <PaginationButton icon="next" />
        </Pagination>
    )
}

export default DemoPagination