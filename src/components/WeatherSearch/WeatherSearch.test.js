import { render,fireEvent } from "@testing-library/react";
import React from "react";
import {WeatherSearch} from "./index";
import { act } from "react-dom/test-utils";
import axios from 'axios'


jest.mock('axios')

const weatherApiResponse = { 
    data: {
        location: {
            name: "Warrington",
            region: "Buckinghamshire",
            country: "United Kingdom",
            lat: 52.18,
            lon: -0.69,
            tz_id: "Europe/London",
            localtime_epoch: 1660168714,
            localtime: "2022-08-10 23:01"
        },
        current: {
            last_updated_epoch: 1660167900,
            last_updated: "2022-08-10 22:45",
            temp_c: 22,
            temp_f: 71.6,
            is_day: 0,
            condition: {
                text: "Clear",
                icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
                code: 1000
            },
            wind_mph: 5.6,
            wind_kph: 9,
            wind_degree: 100,
            wind_dir: "E",
            pressure_mb: 1024,
            pressure_in: 30.24,
            precip_mm: 0,
            precip_in: 0,
            humidity: 53,
            cloud: 0,
            feelslike_c: 24.5,
            feelslike_f: 76,
            vis_km: 10,
            vis_miles: 6,
            uv: 1,
            gust_mph: 13.6,
            gust_kph: 22
        }
    },
    status: 200,
}

describe("WeatherSearch Component", () => {
  it("renders as expected", () => {
    const { asFragment } = render(<WeatherSearch />);
    expect(asFragment()).toMatchSnapshot();
  });
  it("form validation error when user not entered any one of the input fields", () => {
    axios.get.mockResolvedValueOnce(weatherApiResponse)
    const { getByTestId } = render(<WeatherSearch />);
    const searchButton = getByTestId("search-button-test-id");
    fireEvent.click(searchButton)
    const cityTextInput = getByTestId("city-test-id");
    const countryTextInput = getByTestId("country-test-id");
    expect(cityTextInput.getElementsByClassName("MuiInputBase-root MuiOutlinedInput-root Mui-error Mui-error MuiInputBase-fullWidth MuiInputBase-formControl")).toBeTruthy()
    expect(countryTextInput.getElementsByClassName("MuiInputBase-root MuiOutlinedInput-root Mui-error Mui-error MuiInputBase-fullWidth MuiInputBase-formControl")).toBeTruthy()
  });
  it("form success when user entered the input and click on search",() => {
    const { getByTestId} = render(<WeatherSearch />);
    const cityTextInput = getByTestId("city-test-id");
    fireEvent.change(cityTextInput, { target: { value: "London" } });
    const searchButton = getByTestId("search-button-test-id");
    act(()=>{
        fireEvent.click(searchButton)
    })
    expect(cityTextInput.getElementsByClassName("MuiInputBase-input MuiOutlinedInput-input")).toBeTruthy()
    
  });
});

