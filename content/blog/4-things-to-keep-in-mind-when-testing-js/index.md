---
title: 4 things to keep in mind when testing JS
date: "2019-04-10"
---

![test police](./test-police.jpg)

This is an opinionated article on best practice testing JS. I find these 4 things very useful whenever I do testing.


### 1. Only test what user will care about

Let's say we have a button that changes its color when user clicks it. As a user, do I care that `displayColor: red` is the function behind it? Probably not. I only care that whenever I click the button it does somethiing. 
  Testing should test the effect, not implementation.
  // ex with accordion component

### 2. Testing should be to give developer confidence of their code running well

Ultimately, the biggest beneficiary of testing is us developers. Coverage is great, but I have seen scenarios where we have >99% coverage and our code still fails to perform like intended. I think having high coverage is good, but it should not be the only metric. 

A good test should represent the software as closely as possible. 

I like how Kent C Dodds puts it

>[The more your tests resemble the way your software is used, the more confidence they can give you](https://twitter.com/kentcdodds/status/977018512689455106)

### 3. Test integration often

There are multiple facets of testing, including: unit, end-to-end, integration, static, snapshot, etc. Each comes with different tradeoffs. The smaller the test covers the faster, but the higher it is on the tree, the slower it gets. At the same time, the higher test coverage gives a developer higher confidence. Integration testing is good because it hits that sweet spot between speed and confidence
  // Confidence coefficient - good balance
	Here isa [youtube video](https://www.youtube.com/watch?list=PLV5CVI1eNcJgNqzNwcs4UKrlJdhfDjshf&v=Fha2bVoC8SE) that talks about it

### 4. Don't test implementation detail

What is implementation detail, you asked? According to [SO](https://stackoverflow.com/questions/1777719/what-is-the-definition-of-an-implementation-detail), it is 
> It's a behavior produced by code which may be relied on by consuming code, though that behavior is not specified by the spec the code is written to. Hence, other implementations of the same spec may not exhibit the same behavior, and will break that consuming code. That's why it's bad to rely on them.
In short, think of it as things which are hidden from user. Private attributes. 

Testing implementation detail can lead to false positives/ negatives. When we refactor code implementation and keeping its behavior, implementation tests will fail, even though the functionality remains. False negatives. 

