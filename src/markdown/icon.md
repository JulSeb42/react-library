# Icon

Cool icon libraries:
- <a href="https://boxicons.com/" target="_blank" rel="noreferrer noopener">Boxicon</a>
- <a href="https://iconsvg.xyz/" target="_blank" rel="noreferrer noopener">Icons SVG</a>
- <a href="https://github.com/astrit/css.gg" target="_blank" rel="noreferrer noopener">CSS GG</a>

## How to use

Download icons and put them in `/public/icons`

## Component

<Icon name="package" size={48} color="red" />

```
<Icon name="package" size={48} color="red" />
```

## Props

```
name: string, required (name of the icon without ".svg")
size: number, required
color: string / variable, not required (default "currentColor")
```

## Mixin

You can also use a mixin with styled components: 

```
div:before {
    ${IconMixin({
        icon: "name-of-icon",
        size: 12,
        color: "black",
    })}
}
```