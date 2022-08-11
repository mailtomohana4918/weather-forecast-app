import { getUIWeatherResponse, buildWeatherSearchParam, getWeatherResults } from './weatherApi'
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

const expectedResponse =
{
    name: "Warrington",
    region: "Buckinghamshire",
    country: "United Kingdom",
    localtime: "2022-08-10 23:01",
    text: "Clear",
    temp_c: 22,
    status: 200
}

describe("weatherApi", () => {
    describe("getUIWeatherResponse", () => {
        it("return expected response for the given successful response", () => {
            expect(getUIWeatherResponse(weatherApiResponse)).toEqual(expectedResponse)
        });
        it("return expected response for the given unsuccessful response", () => {
            expect(getUIWeatherResponse({ status: 400 }
            )).toEqual({ status: 400 })
        });
    })

    describe("buildWeatherSearchParam", () => {
        it(`return expected response for the given input {"city":"london","country":"uk"}`, () => {
            expect(buildWeatherSearchParam({ "city": "london", "country": "uk" })).toEqual("london,uk")
        });
        it(`return expected response for the given input {"city":"","country":"uk"}`, () => {
            expect(buildWeatherSearchParam({ "city": "", "country": "uk" })).toEqual("uk")
        });
        it(`return expected response for the given input {"city":"london","country":""}`, () => {
            expect(buildWeatherSearchParam({ "city": "london", "country": "" })).toEqual("london")
        });
    })

    describe("getWeatherResults", () => {
        it("return expected response for the given successful response", async () => {
            axios.get.mockResolvedValueOnce(weatherApiResponse)
            const result = await getWeatherResults({ "city": "london", "country": "uk" })
            expect(result).toEqual(expectedResponse)
        });
        it("return expected response for the given error response", async () => {
            const err = { "message": "Request failed with status code 400", "name": "AxiosError", "config": { "transitional": { "silentJSONParsing": true, "forcedJSONParsing": true, "clarifyTimeoutError": false }, "transformRequest": [null], "transformResponse": [null], "timeout": 0, "xsrfCookieName": "XSRF-TOKEN", "xsrfHeaderName": "X-XSRF-TOKEN", "maxContentLength": -1, "maxBodyLength": -1, "env": { "FormData": null }, "headers": { "Accept": "application/json, text/plain, */*" }, "method": "get", "url": "http://api.weatherapi.com/v1/current.json?key=8720d0d40c084fbebf4211330220908&q=krixzz&aqi=no" }, "code": "ERR_BAD_REQUEST", "status": 400 }
            axios.get.mockResolvedValueOnce({
                message: "Request failed with status code 400",
                name: "AxiosError",
                config: {
                    transitional: {
                        silentJSONParsing: true,
                        forcedJSONParsing: true,
                        clarifyTimeoutError: false
                    },
                    transformRequest: [
                        null
                    ],
                    transformResponse: [
                        null
                    ],
                    timeout: 0,
                    xsrfCookieName: "XSRF-TOKEN",
                    xsrfHeaderName: "X-XSRF-TOKEN",
                    maxContentLength: -1,
                    maxBodyLength: -1,
                    env: {
                        FormData: null
                    },
                    headers: {
                        Accept: "application/json, text/plain, */*"
                    },
                    method: "get",
                    url: "http://api.weatherapi.com/v1/current.json?key=8720d0d40c084fbebf4211330220908&q=krixzz&aqi=no"
                },
                code: "ERR_BAD_REQUEST",
                status: 400
            })
            const result = await getWeatherResults({ "city": "krixzz", "country": "" })
            expect(result).toEqual({ status: 400 })
        });

    })
});


