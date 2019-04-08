import React from "react"
import ShallowRenderer from "react-test-renderer/shallow"
import NotFoundPage from "../404"
import * as gatsby from "gatsby"
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "react-testing-library"
import "jest-dom/extend-expect"
import { useStaticQuery } from "gatsby"
import SEO from "../../components/seo"

beforeEach(cleanup)

describe("NotFoundPage", () => {
  it("loads and displays greeting", async () => {
    const dataProps = {
      site: {
        siteMetadata: {
          title: "some title",
        },
      },
    }
    const locationProps = {
      pathname: "/wrong-path",
    }

    const renderer = new ShallowRenderer()
    renderer.render(<NotFoundPage data={dataProps} location={locationProps} />)
    const result = renderer.getRenderOutput()

    expect(result.props.children).toEqual([
      <SEO title="404: Not Found" />,
      <h1>Not Found</h1>,
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>,
    ])
  })
})
