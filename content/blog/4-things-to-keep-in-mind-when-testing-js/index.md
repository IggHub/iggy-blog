---
title: 4 things to keep in mind when testing JS frontend
date: "2019-04-10"
---

![test police](./test-police.jpg)

This is an opinionated article on best practice testing frontend in JS. 
When writing test for JS, the question "what should I test?" looms.
I find these 4 pointers to be useful guides.


### 1. Only test what user will care about

Let's say we have a button that changes its color when user clicks it. If I was the user, do I care that `displayColor: red` is the state behind its coloring? 

Probably not. 

I only care that whenever I click the button it does something.
UI testing should test the effect, not implementation.

### 2. Testing should give developer confidence that their code is running well

Ultimately, the biggest beneficiary to testing is us developers. Coverage is great, but I have seen scenarios where having >99% coverage and still the program fails to perform like intended. I think having high coverage is good, but it should not be the only metric. 

I like how Kent C Dodds puts it

>"[The more your tests resemble the way your software is used, the more confidence they can give you](https://twitter.com/kentcdodds/status/977018512689455106)"

### 3. Test integration often

There are multiple types of testing, including: unit, end-to-end, integration, static, snapshot, etc. Each comes with different tradeoffs. 

The smaller tests (unit, static) are faster but very specific. The larger tests (E2E, snapshot) are better representation of actual program but slower. Imagine as the test scoping gets larger, we are gaining higher confidence that the test will be better representation of actual program. This is why integration test is the better of the two extremes (unt/ static vs E2E) because it hits the sweet spot between confidence and performance. It is fast enough to run and covers multiple moving parts, though not all.

Here is a [youtube video](https://www.youtube.com/watch?list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf&v=Fha2bVoC8SE) that talks about it.

### 4. Don't test implementation detail

What is implementation detail, you asked? According to [SO](https://stackoverflow.com/questions/1777719/what-is-the-definition-of-an-implementation-detail), it is 

> It's a behavior produced by code which may be relied on by consuming code, though that behavior is not specified by the spec the code is written to. Hence, other implementations of the same spec may not exhibit the same behavior, and will break that consuming code. That's why it's bad to rely on them.
In short, think of it as things which are hidden from user. Private attributes. 

Testing implementation detail can lead to false positives/ negatives. For example, suppose one of the devs refactor code implementation and keeping its behavior (the button will still change color when clicked, but it no longer looks for `displayColor` attribute), implementation tests will fail, even though the functionality remains (it still changes color!). False negative. We will have to update every single instances where that button test is done.

## tl;dr

When testing frontend, do not get bogged down by private/ unnecessary details. Since frontend is customer facing, it's helpful to keep the perspective of customer the whole time - would this affect User Experience? If the question is no, we should use discernment before rushing to write it for the sake of getting that coverage up to `99.0%`. 

Call it __user-centric testing mindset__.
