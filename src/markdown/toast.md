# Toast

## Title only

<Toast title="Title" />

```
<Toast title="Title" />
```

## Title and body

<Toast title="Title">Message</Toast>

```
<Toast title="Title">Message</Toast>
```

## Title with icon

<Toast title="Title" icon="check-circle" iconcolor="rgb(9,129,74)">Message</Toast>

```
<Toast title="Title" icon="check-circle" iconcolor={Variables.Colors.Success500}>Message</Toast>
```

## Title with close

<Toast title="Title" icon="check-circle" iconcolor="rgb(9,129,74)" close>Message</Toast>

```
<Toast title="Title" icon="check-circle" iconcolor={Variables.Colors.Success500} close={closeFunction}>Message</Toast>
```

## Props

```
title: string, required
children: string, not required
icon: string, not required
iconcolor: string / variable, required if icon
close: function, not required
```