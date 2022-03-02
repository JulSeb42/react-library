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
    <Aside template="aside-left">Aside left</Aside>
    <Main template="aside-left">
        ## Main with aside on the left
    </Main>
</Wrapper>

```
<Wrapper template="aside-left">
    <Aside template="aside-left">
    
    </Aside>
    
    <Main template="aside-left">
        
    </Main>
</Wrapper>
```

<Wrapper template="aside-right">
    <Main template="aside-right">
        ## Main with aside on the right
    </Main>
    <Aside template="aside-right">Aside right</Aside>
</Wrapper>

```
<Wrapper template="aside-right">
    <Main template="aside-right">
       
    </Main>

    <Aside template="aside-right">

    </Aside>
</Wrapper>
```

<Wrapper template="both-sides">
    <Aside template="both-sides">Aside left</Aside>
    <Main template="both-sides">
        ## Main with aside on both sides
    </Main>
    <Aside template="both-sides" last>Aside right</Aside>
</Wrapper>

```
<Wrapper template="both-sides">
    <Aside template="both-sides">
    
    </Aside>

    <Main template="both-sides">
    
    </Main>

    <Aside template="both-sides" last>

    </Aside>
</Wrapper>
```

<Wrapper template="form">
    <Main>
        ## Container for form pages
    </Main>
</Wrapper>

```
<Wrapper template="form">
    <Main>
        
    </Main>
</Wrapper>
```