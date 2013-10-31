# Yeogurt Markup Partials

## What is this folder for?

This folder will house any jade files that don't fit or make sense within other folders.
Partials should be few and far between, but there is always a chance that you need to break up your markup for better maintainability without defining that markup as a component or element.

## Example of when to use partials

A good example for partials would be if you had a large number of forms within a template, but they were/are not defined as components by a another team you are working with. You are contrained to only use their specification for components and cannot make each form into one. The dillema is that you have a lot of markup for these forms and it would be much easier to maintain them if they were broken up into separate files. Viola! partials are perfect for this situation, so you would create a file for each form within the partials folder.

## Everything is a mixin (Except for Pages & Templates)

Even if you don't plan to have any logic inside your partials, you should make them into mixins to keep consistant with all other jade files. The only jade files that are not mixins are templates and pages as they contain/display our markup while everythign else acts as a building block.

## Naming Prefix

Be sure to use this format when naming your partials:

```bash
pa000-partial-name
```