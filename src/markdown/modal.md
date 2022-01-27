# Modal

<DemoModal />

```
function DemoModal() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(!isOpen)} justify="start">Open modal</Button>

            <Modal
                className={isOpen ? "open" : ""}
                close={() => setIsOpen(!isOpen)}
            >
                <Image
                    src="https://images.unsplash.com/photo-1642952317900-fa90e2c89115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                    alt="Image modal"
                />
            </Modal>
        </>
    )
}
```

## Props

```
close: function, not required
```