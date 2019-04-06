import React from "react"
import renderer from "react-test-renderer"
import NotFoundPage from "../404"

import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from "react-testing-library"
import "jest-dom/extend-expect"

afterEach(cleanup)

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
    const { getByText, getByTestId, container, asFragment } = render(
      <NotFoundPage data={dataProps} location={locationProps} />
    )

    expect(getByText("Not Found")).toBeTruthy()
    // Arrange
    // Act
    // Assert
  })
})
