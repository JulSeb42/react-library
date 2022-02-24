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
    <Aside col={2} template="aside-left">Aside left</Aside>
    <Main col={3} template="aside-left">
        ## Main with aside on the left
    </Main>
</Wrapper>

```
<Wrapper template="aside-left">
    <Aside col={2} template="aside-left">
    
    </Aside>
    
    <Main col={3} template="aside-left">
        
    </Main>
</Wrapper>
```

<Wrapper template="aside-right">
    <Main col={2} template="aside-right">
        ## Main with aside on the right
    </Main>
    <Aside col={3} template="aside-right">Aside right</Aside>
</Wrapper>

```
<Wrapper template="aside-right">
    <Main col={2} template="aside-right">
       
    </Main>

    <Aside col={3} template="aside-right">

    </Aside>
</Wrapper>
```

<Wrapper template="both-sides">
    <Aside col={2} template="both-sides">Aside left</Aside>
    <Main col={3} template="both-sides">
        ## Main with aside on the right
    </Main>
    <Aside col={4} template="both-sides">Aside right</Aside>
</Wrapper>

```
<Wrapper template="both-sides">
    <Aside col={2} template="both-sides"></Aside>

    <Main col={3} template="both-sides"></Main>

    <Aside col={4} template="both-sides"></Aside>
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