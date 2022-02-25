# Input

<!-- <DemoInputs /> -->

<DemoInputs>
    <Grid gap="12px">
        ## Text inputs

        <Input id="input" />

        ```
        <Input id="input" />
        ```

        <Input id="input-password" password iconpassword />

        ```
        <Input id="input-password" password />
        ```

        <Input label="Label" helper="Helper" id="input-label" />

        ```
        <Input label="Label" helper="Helper" id="input-label" />
        ```

        <Input icon="mail" id="input-icon" />

        ```
        <Input icon="mail" id="input-icon" />
        ```

        <Input id="input-disabled" disabled value="disabled" />

        ```
        <Input id="input-disabled" disabled />
        ```

        <DemoValidate />

        ```
        function DemoValidate() {
            const [validation, setValidation] = useState("not-passed")
            const [inputValidate, setInputValidate] = useState("e")

            const handleValidation = e => {
                setInputValidate(e.target.value)

                if (e.target.value.length > 6) {
                    setValidation("passed")
                } else {
                    setValidation("not-passed")
                }
            }

            return (
                <Input
                    label="Input with validation"
                    id="input-validation"
                    validationText="Text validation"
                    onChange={handleValidation}
                    validation={validation}
                    value={inputValidate}
                />
            )
        }
        ```

        <DemoPassword />

        ```
        function DemoPassword() {
            const [validationPassword, setValidationPassword] = useState("not-passed")
            const [password, setPassword] = useState("e")

            const handlePassword = e => {
                setPassword(e.target.value)

                if (e.target.value.length > 6) {
                    setValidationPassword("passed")
                } else {
                    setValidationPassword("not-passed")
                }
            }

            return (
                <Input
                    id="input-validation-password"
                    validationText="Text validation"
                    onChange={handlePassword}
                    validation={validationPassword}
                    value={password}
                    password
                />
            )
        }
        ```

        <DemoCounter />

        ```
        function DemoCounter() {
            const [text, setText] = useState("")
            const handleText = e => setText(e.target.value)

            return (
                <Input
                    type="textarea"
                    label="Textarea"
                    id="textarea"
                    value={text}
                    onChange={handleText}
                    counter={140}
                />
            )
        }
        ```

        <Input type="select" label="Select" id="select">
            <option>1</option>
        </Input>

        ```
        <Input type="select" label="Select" id="select">
            <option>1</option>
        </Input>
        ```

        <DemoMarkdown />

        ```
        export function DemoMarkdown() {
            const [markdown, setMarkdown] = useState("")

            return (
                <Input
                    type="markdown"
                    label="Markdown"
                    id="markdown"
                    onChange={setMarkdown}
                    value={markdown}
                />
            )
        }
        ```
    </Grid>

    ## Props for text inputs

    ```
    type: string, not required, default text
    label: string, not required
    helper: string, not required
    validation: function, not required
    validationText: string, not required
    id: string, required
    icon: string, not required
    disabled: not required
    value: string or function, required
    onChange: function, required
    password: not required
    counter: not required, sets also the maxLength
    ```

    <Grid gap="12px">
        ## Check inputs

        <Grid gap="4px">
            <CheckInput
                label="Checkbox"
                id="checkbox-1"
                type="checkbox"
                justify="start"
                name="checkbox"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-2"
                type="checkbox"
                defaultChecked={true}
                justify="start"
                name="checkbox"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-1"
                type="checkbox"
                disabled
                justify="start"
                name="checkbox-disabled"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-2"
                type="checkbox"
                defaultChecked={true}
                disabled
                justify="start"
                name="checkbox-disabled"
            />

            ```
            <CheckInput
                label="Checkbox"
                id="checkbox-1"
                type="checkbox"
                justify="start"
                name="checkbox"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-2"
                type="checkbox"
                defaultChecked={true}
                justify="start"
                name="checkbox"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-1"
                type="checkbox"
                disabled
                justify="start"
                name="checkbox-disabled"
            />

            <CheckInput
                label="Checkbox"
                id="checkbox-2"
                type="checkbox"
                defaultChecked={true}
                disabled
                justify="start"
                name="checkbox-disabled"
            />
            ```
        </Grid>

        <Grid gap="4px">
            <CheckInput
                label="Radio"
                id="radio-1"
                type="radio"
                justify="start"
                name="radio"
            />

            <CheckInput
                label="Radio"
                id="radio-2"
                type="radio"
                defaultChecked={true}
                justify="start"
                name="radio"
            />

            <CheckInput
                label="Radio"
                id="radio-1"
                type="radio"
                disabled
                justify="start"
                name="radio-disabled"
            />

            <CheckInput
                label="Radio"
                id="radio-2"
                type="radio"
                defaultChecked={true}
                disabled
                justify="start"
                name="radio-disabled"
            />

            ```
            <CheckInput
                label="Radio"
                id="radio-1"
                type="radio"
                justify="start"
                name="radio"
            />

            <CheckInput
                label="Radio"
                id="radio-2"
                type="radio"
                defaultChecked={true}
                justify="start"
                name="radio"
            />

            <CheckInput
                label="Radio"
                id="radio-1"
                type="radio"
                disabled
                justify="start"
                name="radio-disabled"
            />

            <CheckInput
                label="Radio"
                id="radio-2"
                type="radio"
                defaultChecked={true}
                disabled
                justify="start"
                name="radio-disabled"
            />
            ```
        </Grid>

        <Grid gap="4px">
            <CheckInput
                label="Toggle"
                id="toggle-1"
                type="checkbox"
                justify="start"
                name="toggle"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-2"
                type="checkbox"
                defaultChecked={true}
                justify="start"
                name="toggle"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-1"
                type="checkbox"
                disabled
                justify="start"
                name="toggle-disabled"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-2"
                type="checkbox"
                defaultChecked={true}
                disabled
                justify="start"
                name="toggle-disabled"
                toggle
            />

            ```
            <CheckInput
                label="Toggle"
                id="toggle-1"
                type="checkbox"
                justify="start"
                name="toggle"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-2"
                type="checkbox"
                defaultChecked={true}
                justify="start"
                name="toggle"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-1"
                type="checkbox"
                disabled
                justify="start"
                name="toggle-disabled"
                toggle
            />

            <CheckInput
                label="Toggle"
                id="toggle-2"
                type="checkbox"
                defaultChecked={true}
                disabled
                justify="start"
                name="toggle-disabled"
                toggle
            />
            ```
        </Grid>

        ## Props for check inputs

        ```
        label: string, required
        id: string, required
        typ: string, required, default checkbox
        defaultChecked: boolean, not required
        disabled: not required
        justify: string, not required, in case the input is inside a grid
        name: string, required
        toggle: not required
        ```
    </Grid>

    <Grid gap="12px">

    <DemoSuggestions />

    ```
    import allCities from "./cities.json"

    function DemoSuggestions(props) {
        // List suggestions
        const [cities, setCities] = useState([])
        const [location, setLocation] = useState("")

        useEffect(() => {
            setCities(allCities.map(city => `${city.name}, ${city.country}`))
        }, [])

        const [filteredCities, setFilteredCities] = useState("")

        const handleFilterLocation = e => {
            setLocation(e.target.value)
            setFilteredCities(e.target.value)
        }

        let resultsCities = cities.filter(city => {
            return city.toLowerCase().includes(filteredCities.toLowerCase())
        })

        const handleClickSuggestion = e => {
            setLocation(e.target.innerText)
        }

        return (
            <Autocomplete
                label="Location"
                id="location"
                onChange={handleFilterLocation}
                value={location}
                items={resultsCities}
                onMouseDown={handleClickSuggestion}
            />
        )
    }
    ```

    ## Props for list suggestions

    ```
    label: string, not required
    helper: string, not required
    id: string, required
    onChange: function, required 
    value: string or function, required
    items: array, required
    onMouseDown: function, required
    ```

    <Grid gap="12px">
        ## Input image

        <DemoImage />

        ```
        export function DemoImage() {
            const [image, setImage] = useState("")

            const handleImage = e => {
                if (e.target.files[0]) {
                    setImage(e.target.files[0])
                    const reader = new FileReader()
                    reader.addEventListener("load", () => {
                        setImage(reader.result)
                    })
                    reader.readAsDataURL(e.target.files[0])
                }
            }

            return (
                <InputImage
                    label="Image"
                    src={image}
                    alt="Alt"
                    onChange={e => handleImage(e)}
                    id="image"
                />
            )
        }
        ```

        ## Props for Image

        ```
        label: string, not required
        helper: string, not required
        src: string, required
        alt: string, not required
        onChange: function, required
        id: string, not required
        ```
    </Grid>
</DemoInputs>