import { render } from "@testing-library/react";
import React from "react";
import {TechnicalError} from "./TechnicalError";

describe("TechnicalError Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<TechnicalError />);
    expect(asFragment()).toMatchSnapshot();
  });
});