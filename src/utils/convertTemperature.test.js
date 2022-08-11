import {convertTemperature} from "./convertTemperature";

describe("convertTemperature", () => {
  it("return 76.46 for the given input", () => {
    expect(convertTemperature(24.7,'fahrenheit')).toEqual(76.46)  
  });
  it("return 24.7 for the given input", () => {
    expect(convertTemperature(24.7,'celsius')).toEqual(24.7)  
  });
});