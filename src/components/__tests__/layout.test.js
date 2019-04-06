import React from "react"
import renderer from "react-test-renderer"

import Layout from "../layout"

describe("Layout", () => {
  describe("rootPath is /", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Layout location={{ pathname: "/" }} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
  describe("rootPath is not /", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<Layout location={{ pathname: "/some-url" }} />)
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })
})
