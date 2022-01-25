# Container

<Wrapper>
    <Main>
        ## Main without aside
    </Main>
</Wrapper>

```
<Wrapper>
    <Main>
        
    </Main>
</Wrapper>
```

<Wrapper template="aside-left">
    <Aside col={2}>Aside left</Aside>
    <Main col={3}>
        ## Main with aside on the left
    </Main>
</Wrapper>

```
<Wrapper template="aside-left">
    <Aside col={2}>
    
    </Aside>
    
    <Main col={3}>
        
    </Main>
</Wrapper>
```

<Wrapper template="aside-right">
    <Main col={2}>
        ## Main with aside on the left
    </Main>
    <Aside col={3}>Aside right</Aside>
</Wrapper>

```
<Wrapper template="aside-right">
    <Main col={2}>
       
    </Main>

    <Aside col={3}>

    </Aside>
</Wrapper>
```