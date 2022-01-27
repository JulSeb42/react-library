# Burger

<DemoBurger />

```
function DemoBurger(props) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Burger
            onClick={() => setIsOpen(!isOpen)}
            className={isOpen ? "open" : ""}
        />
    )
}
```

## Props

```
onClick: function, required
className: string / variable, required
width: number, not required, default 32
height: number, not required, default 24
color: string, not required, can be primary, secondary, success, danger, warning, white, or a custom color, default primary
border: number, not required, default 2, thickness of the border
```