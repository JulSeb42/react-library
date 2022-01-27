# Alert

## Title only

<Alert title="Title" />

```
<Alert title="Title" />
```

## Title and body

<Alert title="Title">Message</Alert>

```
<Alert title="Title">Message</Alert>
```

## Title with icon

<Alert title="Title" icon="check-circle" iconcolor="rgb(9,129,74)">Message</Alert>

```
<Alert title="Title" icon="check-circle" iconcolor={Variables.Colors.Success500}>Message</Alert>
```

## Title with close

<Alert title="Title" icon="check-circle" iconcolor="rgb(9,129,74)" close>Message</Alert>

```
<Alert title="Title" icon="check-circle" iconcolor={Variables.Colors.Success500} close={closeFunction}>Message</Alert>
```

## Props

```
title: string, required
children: string, not required
icon: string, not required
iconcolor: string / variable, required if icon
close: function, not required
```