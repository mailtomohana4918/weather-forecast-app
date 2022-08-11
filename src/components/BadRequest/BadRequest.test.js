import { render } from "@testing-library/react";
import React from "react";
import {BadRequest} from "./BadRequest";

describe("BadRequest Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<BadRequest />);
    expect(asFragment()).toMatchSnapshot();
  });
});