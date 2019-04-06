import React from "react"
import Bio from "../bio"
import renderer from "react-test-renderer"
import { StaticQuery } from "gatsby"

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      avatar: {
        childImageSharp: {
          fixed: {},
        },
      },
      site: {
        siteMetadata: {
          authorAlias: "testAuthor",
          social: {
            twitter: "someTwitterHandle",
          },
        },
      },
    })
  )
})

describe("Bio", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Bio />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
