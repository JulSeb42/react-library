# Badge

## Empty

<Grid col={8}>
    <Badge color="primary" />
    <Badge color="secondary" />
    <Badge color="success" />
    <Badge color="danger" />
    <Badge color="warning" />
</Grid>

```
<Badge color="primary" />
<Badge color="secondary" />
<Badge color="success" />
<Badge color="danger" />
<Badge color="warning" />
```

## With number

<Grid col={8}>
    <Badge color="primary" size={32}>1</Badge>
    <Badge color="secondary" size={32}>1</Badge>
    <Badge color="success" size={32}>1</Badge>
    <Badge color="danger" size={32}>1</Badge>
    <Badge color="warning" size={32}>1</Badge>
</Grid>

```
<Badge color="primary" size={32}>1</Badge>
<Badge color="secondary" size={32}>1</Badge>
<Badge color="success" size={32}>1</Badge>
<Badge color="danger" size={32}>1</Badge>
<Badge color="warning" size={32}>1</Badge>
```

## With icon

<Grid col={8}>
    <Badge color="primary" size={48} icon="star" />
    <Badge color="secondary" size={48} icon="star" />
    <Badge color="success" size={48} icon="star" />
    <Badge color="danger" size={48} icon="star" />
    <Badge color="warning" size={48} icon="star" />
</Grid>

```
<Badge color="primary" size={48} icon="star" />
<Badge color="secondary" size={48} icon="star" />
<Badge color="success" size={48} icon="star" />
<Badge color="danger" size={48} icon="star" />
<Badge color="warning" size={48} icon="star" />
```

## Props

```
color: string, required, can be primary, secondary, success, danger, warning, white, or a custom color, default primary
size: number, required, default 16
icon: string, not required
children: string, not required
```