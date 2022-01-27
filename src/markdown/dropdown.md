# Dropdown

<DemoDropdown />

```
function DemoDropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <DropdownContainer>
            <Button
                btnstyle="plain"
                color="primary"
                onClick={() => setIsOpen(!isOpen)}
            >
                Open dropdown
            </Button>

            <Dropdown className={isOpen ? "open" : ""}>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
                <Link to="#">Link</Link>
            </Dropdown>
        </DropdownContainer>
    )
}
```