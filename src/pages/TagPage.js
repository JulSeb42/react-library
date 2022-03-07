// Packages
import React from "react"

import * as Font from "../components/Font"
import Tag from "../components/Tag"
import Grid from "../components/Grid"

const TagPage = () => {
    return (
        <>
            <Font.H2>Selectable</Font.H2>
            <Font.H3>Rounded</Font.H3>
            <Grid col={8}>
                <Tag
                    color="primary"
                    id="tag-primary-round"
                    label="Tag"
                    justify="start"
                    select
                />
                <Tag
                    color="secondary"
                    id="tag-secondary-round"
                    label="Tag"
                    justify="start"
                    select
                />
                <Tag
                    color="success"
                    id="tag-success-round"
                    label="Tag"
                    justify="start"
                    select
                />
                <Tag
                    color="danger"
                    id="tag-danger-round"
                    label="Tag"
                    justify="start"
                    select
                />
                <Tag
                    color="warning"
                    id="tag-warning-round"
                    label="Tag"
                    justify="start"
                    select
                />
                <Tag
                    color="disabled"
                    id="tag-primary-round"
                    label="Tag"
                    justify="start"
                    select
                    disabled
                />
            </Grid>

            <Font.H3>Pill</Font.H3>
            <Grid col={8}>
                <Tag
                    color="primary"
                    id="tag-primary-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                />
                <Tag
                    color="secondary"
                    id="tag-secondary-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                />
                <Tag
                    color="success"
                    id="tag-success-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                />
                <Tag
                    color="danger"
                    id="tag-danger-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                />
                <Tag
                    color="warning"
                    id="tag-warning-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                />
                <Tag
                    color="disabled"
                    id="tag-primary-pill"
                    label="Tag"
                    justify="start"
                    select
                    pill
                    disabled
                />
            </Grid>

            <Font.H2>Not selectable</Font.H2>
            <Font.H3>Rounded</Font.H3>
            <Grid col={8}>
                <Tag
                    color="primary"
                    id="tag-primary-round"
                    label="Tag"
                    justify="start"
                />
                <Tag
                    color="secondary"
                    id="tag-secondary-round"
                    label="Tag"
                    justify="start"
                />
                <Tag
                    color="success"
                    id="tag-success-round"
                    label="Tag"
                    justify="start"
                />
                <Tag
                    color="danger"
                    id="tag-danger-round"
                    label="Tag"
                    justify="start"
                />
                <Tag
                    color="warning"
                    id="tag-warning-round"
                    label="Tag"
                    justify="start"
                />
            </Grid>

            <Font.H3>Pill</Font.H3>
            <Grid col={8}>
                <Tag
                    color="primary"
                    id="tag-primary-pill"
                    label="Tag"
                    justify="start"
                    pill
                />
                <Tag
                    color="secondary"
                    id="tag-secondary-pill"
                    label="Tag"
                    justify="start"
                    pill
                />
                <Tag
                    color="success"
                    id="tag-success-pill"
                    label="Tag"
                    justify="start"
                    pill
                />
                <Tag
                    color="danger"
                    id="tag-danger-pill"
                    label="Tag"
                    justify="start"
                    pill
                />
                <Tag
                    color="warning"
                    id="tag-warning-pill"
                    label="Tag"
                    justify="start"
                    pill
                />
            </Grid>
        </>
    )
}

export default TagPage

