# Card

## Basic card

<BasicCard title="Title" subtitle="Subtitle" button="Button" btnstyle="text" direction="portrait" icon="credit-card" iconcolor="rgb(38,109,211)" btnnopadding to="#" />

<BasicCard title="Title" subtitle="Subtitle" button="Button" btnstyle="text" direction="landscape" icon="credit-card" iconcolor="rgb(38,109,211)" btnnopadding />

```
<BasicCard title="Title" subtitle="Subtitle" button="Button" btnstyle="text" direction="portrait" icon="credit-card" iconcolor="rgb(38,109,211)" btnnopadding />

<BasicCard title="Title" subtitle="Subtitle" button="Button" btnstyle="text" direction="landscape" icon="credit-card" iconcolor="rgb(38,109,211)" btnnopadding />
```

## Props basic card

```
direction: required, landscape or portrait
title: string, not required
subtitle: string, not required
to: string, not required, if you want the card as a link
button: string, not required
btnstyle: string, not required
btncolor: string / variable, not required
btniconleft: string, not required
btniconright: string, not required
btnto: string, not required
onClickButton: function, not required
btnnopadding: not required
icon: string, not required
iconcolor: string / variable, not required
iconsize: number, not required
```

## Image card

<ImageCard
    title="Title"
    subtitle="Subtitle"
    to="#"
    src="https://images.unsplash.com/photo-1642952317900-fa90e2c89115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY5fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    alt="Card"
/>

```
<ImageCard
    title="Title"
    subtitle="Subtitle"
    to="#"
    src="https://images.unsplash.com/photo-1642516303080-431f6681f864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
    alt="Card"
/>
```

## Props image card

```
title: string, not required
subtitle: string, not required
to: string, not required
src: string, required
alt: string, required
```