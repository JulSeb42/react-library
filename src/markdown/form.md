# Form

<Form btnprimary="Send" btncancel="/">
    <Input label="Name" />

    <Input label="Password" password />
</Form>

## Props

```
btnprimary: string, not required, text for the submit button
colorprimary: string / variable, not required, color for the submit button, default primary
iconleftprimary: string, not required, in case you want an icon left on the primary button
iconrightprimary: string, not required, in case you want an icon right on the primary button
loading: boolean, not required, if the form needs to load before being sent

btncancel: url, required only if there's a cancel button
colorcancel: string / variable, not required, color for the cancel button, default primary
iconleftcancel: string, not required, in case you want an icon left on the cancel button
iconrightcancel: string, not required, in case you want an icon right on the cancel button
textbtncancel: string, not required, text for the cancel button, default "Cancel"

colorreset:  string / variable, not required, color for the reset button, default primary
iconleftreset: string, not required, in case you want an icon left on the reset button
iconrightreset: string, not required, in case you want an icon right on the reset button
onClickReset: function, not required, function triggered when clicking on the reset button
textbtnreset: string, not required, text for the reset button, default "Reset"
```