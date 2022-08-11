import { render } from "@testing-library/react";
import React from "react";
import {WeatherResults} from "./WeatherResults";

describe("WeatherResults Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<WeatherResults {...{text:"sunny",country:"United Kingdom",name:"London",localtime:"",temperature:25}}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});