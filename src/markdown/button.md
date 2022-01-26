# Button

## Plain

<Grid col={8}>
    <Button btnstyle="plain" color="primary" justify="start">Button</Button>
    <Button btnstyle="plain" color="secondary" justify="start">Button</Button>
    <Button btnstyle="plain" color="success" justify="start">Button</Button>
    <Button btnstyle="plain" color="danger" justify="start">Button</Button>
    <Button btnstyle="plain" color="warning" justify="start">Button</Button>
    <Button btnstyle="plain" color="white" justify="start">Button</Button>
    <Button btnstyle="plain" color="primary" justify="start" disabled>Button</Button>
</Grid>

```
<Button btnstyle="plain" color="primary" justify="start">Button</Button>
<Button btnstyle="plain" color="secondary" justify="start">Button</Button>
<Button btnstyle="plain" color="success" justify="start">Button</Button>
<Button btnstyle="plain" color="danger" justify="start">Button</Button>
<Button btnstyle="plain" color="warning" justify="start">Button</Button>
<Button btnstyle="plain" color="white" justify="start">Button</Button>
<Button btnstyle="plain" color="primary" justify="start" disabled>Button</Button>
```

## Text

<Grid col={8}>
    <Button btnstyle="text" color="primary" justify="start">Button</Button>
    <Button btnstyle="text" color="secondary" justify="start">Button</Button>
    <Button btnstyle="text" color="success" justify="start">Button</Button>
    <Button btnstyle="text" color="danger" justify="start">Button</Button>
    <Button btnstyle="text" color="warning" justify="start">Button</Button>
    <Button btnstyle="text" color="white" justify="start">Button</Button>
    <Button btnstyle="text" color="primary" justify="start" disabled>Button</Button>
</Grid>

```
<Button btnstyle="text" color="primary" justify="start">Button</Button>
<Button btnstyle="text" color="secondary" justify="start">Button</Button>
<Button btnstyle="text" color="success" justify="start">Button</Button>
<Button btnstyle="text" color="danger" justify="start">Button</Button>
<Button btnstyle="text" color="warning" justify="start">Button</Button>
<Button btnstyle="text" color="white" justify="start">Button</Button>
<Button btnstyle="text" color="primary" justify="start" disabled>Button</Button>
```

## Outline

<Grid col={8}>
    <Button btnstyle="outline" color="primary" justify="start">Button</Button>
    <Button btnstyle="outline" color="secondary" justify="start">Button</Button>
    <Button btnstyle="outline" color="success" justify="start">Button</Button>
    <Button btnstyle="outline" color="danger" justify="start">Button</Button>
    <Button btnstyle="outline" color="warning" justify="start">Button</Button>
    <Button btnstyle="outline" color="white" justify="start">Button</Button>
    <Button btnstyle="outline" color="primary" justify="start" disabled>Button</Button>
</Grid>

```
<Button btnstyle="outline" color="primary" justify="start">Button</Button>
<Button btnstyle="outline" color="secondary" justify="start">Button</Button>
<Button btnstyle="outline" color="success" justify="start">Button</Button>
<Button btnstyle="outline" color="danger" justify="start">Button</Button>
<Button btnstyle="outline" color="warning" justify="start">Button</Button>
<Button btnstyle="outline" color="white" justify="start">Button</Button>
<Button btnstyle="outline" color="primary" justify="start" disabled>Button</Button>
```

## With icon left

<Button btnstyle="plain" color="primary" justify="start" iconleft="send">Button</Button>

## With icon right

<Button btnstyle="plain" color="primary" justify="start" iconright="chevron-down">Button</Button>

## Props

```
btnstyle: string, required, can be plain, text or outline
color: string, required, can be primary, secondary, success, danger, warning, white, or a custom color
colorHover: string, not required, if you are using a custom color
colorActive: string, not required, if you are using a custom color
justify: string, not required, in case the button is inside a grid
iconleft: string, not required, name of the icon
iconright: string, not required, name of the icon
to: string, not required, if you want to use the button as a link
```

## With icon only

<ButtonIcon icon="mail" color="primary" />

## Props

```
icon: string, required, name of the icon
color: string, required, can be primary, secondary, success, danger, warning, white, or a custom color
to: string, not required, if you want to use the button as a link
size: number, not required, default 48
```