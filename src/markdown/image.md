# Image

## Auto height

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
/>

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
    caption="Caption"
/>

```
<Image
    src="link-to-img"
    alt="alt"
/>

<Image
    src="link-to-img"
    alt="alt"
    caption="Caption"
/>
```

## Fixed height, fit cover

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
    height="400px"
    fit="cover"
/>

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
    caption="Caption"
    height="400px"
    fit="cover"
/>

```
<Image
    src="link-to-img"
    alt="alt"
    height="400px"
    fit="cover"
/>

<Image
    src="link-to-img"
    alt="alt"
    caption="Caption"
    height="400px"
    fit="cover"
/>
```

## Fixed height, fit contain

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
    height="400px"
    fit="contain"
/>

<Image
    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
    alt="alt"
    caption="Caption"
    height="400px"
    fit="contain"
/>

```
<Image
    src="link-to-img"
    alt="alt"
    height="400px"
    fit="contain"
/>

<Image
    src="link-to-img"
    alt="alt"
    caption="Caption"
    height="400px"
    fit="contain"
/>
```

## Props

```
src: string, required, path to the image
alt: string, required, alt text for image
width: string, not required, default 100%
height: string, not required, default auto
fit: string, not required, possible values: cover, contain, fill, scale-down
```