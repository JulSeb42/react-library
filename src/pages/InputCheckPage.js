// Packages
import React from "react"

import * as Font from "../components/Font"
import Grid from "../components/Grid"
import Variables from "../components/Variables"
import InputCheck from "../components/InputCheck"

const InputCheckPage = () => {
    return (
        <>
            <Font.H2>Checkbox</Font.H2>
            <Grid gap={Variables.Spacers.XXS}>
                <InputCheck
                    label="Checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    justify="start"
                    name="checkbox"
                />

                <InputCheck
                    label="Checkbox"
                    id="checkbox-2"
                    type="checkbox"
                    defaultChecked={true}
                    justify="start"
                    name="checkbox"
                />

                <InputCheck
                    label="Checkbox"
                    id="checkbox-1"
                    type="checkbox"
                    disabled
                    justify="start"
                    name="checkbox-disabled"
                />

                <InputCheck
                    label="Checkbox"
                    id="checkbox-2"
                    type="checkbox"
                    defaultChecked={true}
                    disabled
                    justify="start"
                    name="checkbox-disabled"
                />
            </Grid>

            <Font.H2>Radio</Font.H2>
            <Grid gap={Variables.Spacers.XXS}>
                <InputCheck
                    label="Radio"
                    id="radio-1"
                    type="radio"
                    justify="start"
                    name="radio"
                />

                <InputCheck
                    label="Radio"
                    id="radio-2"
                    type="radio"
                    defaultChecked={true}
                    justify="start"
                    name="radio"
                />

                <InputCheck
                    label="Radio"
                    id="radio-1"
                    type="radio"
                    disabled
                    justify="start"
                    name="radio-disabled"
                />

                <InputCheck
                    label="Radio"
                    id="radio-2"
                    type="radio"
                    defaultChecked={true}
                    disabled
                    justify="start"
                    name="radio-disabled"
                />
            </Grid>

            <Font.H2>Toggle</Font.H2>
            <Grid gap={Variables.Spacers.XXS}>
                <InputCheck
                    label="Toggle"
                    id="toggle-1"
                    type="checkbox"
                    justify="start"
                    name="toggle"
                    toggle
                />

                <InputCheck
                    label="Toggle"
                    id="toggle-2"
                    type="checkbox"
                    defaultChecked={true}
                    justify="start"
                    name="toggle"
                    toggle
                />

                <InputCheck
                    label="Toggle"
                    id="toggle-1"
                    type="checkbox"
                    disabled
                    justify="start"
                    name="toggle-disabled"
                    toggle
                />

                <InputCheck
                    label="Toggle"
                    id="toggle-2"
                    type="checkbox"
                    defaultChecked={true}
                    disabled
                    justify="start"
                    name="toggle-disabled"
                    toggle
                />
            </Grid>

            <Font.H2>Selector</Font.H2>
            <Grid gap={Variables.Spacers.XXS}>
                <InputCheck
                    label="Selector"
                    id="selector-1"
                    justify="start"
                    name="selector"
                    type="checkbox"
                    selector
                />
                <InputCheck
                    label="Selector"
                    id="selector-2"
                    justify="start"
                    name="selector"
                    type="checkbox"
                    defaultChecked={true}
                    selector
                />
                <InputCheck
                    label="Selector"
                    id="selector-3"
                    justify="start"
                    name="selector"
                    type="checkbox"
                    selector
                    disabled
                />
                <InputCheck
                    label="Selector"
                    id="selector-4"
                    justify="start"
                    name="selector"
                    type="checkbox"
                    defaultChecked={true}
                    selector
                    disabled
                />
            </Grid>
        </>
    )
}

export default InputCheckPage

