
import React from "react"
import { TechnicalError } from '../TechnicalError/TechnicalError'
import { WeatherResults } from '../WeatherResults/WeatherResults'
import { BadRequest } from '../BadRequest'


//decision making component renders based on the qualified condition
export const WeatherApp = (props) => {
    const {status} = props.weatherInfo
    return (
        status === 200 ? <WeatherResults {...props.weatherInfo} /> : status === 400 ? <BadRequest /> : <TechnicalError />
    )
}

