# Accordion

## Basic

<DemoAccordionBasic />

```
<Accordion accordionstyle="basic">
    <AccordionItem title="Item" icon="chevron" isOpen>
        Content
    </AccordionItem>

    <AccordionItem title="Item" icon="chevron">
        Content
    </AccordionItem>

    <AccordionItem title="Item" icon="chevron">
        Content
    </AccordionItem>
</Accordion>
```

## Rounded

<DemoAccordionRounded />

```
 <Accordion accordionstyle="rounded">
    <AccordionItem title="Item" icon="plus">
        Content
    </AccordionItem>

    <AccordionItem title="Item" icon="plus">
        Content
    </AccordionItem>

    <AccordionItem title="Item" icon="plus">
        Content
    </AccordionItem>
</Accordion>
```

## Props

```
Container props:
accordionstyle: string, required, default basic

Item props
title: string, required
icon: string, required, plus or chevron, default chevron
isOpen: not required, sets default to open
children: string, required, content
```