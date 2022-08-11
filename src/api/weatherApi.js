import axios from 'axios'

//getWeatherResults returns the custom response from the recieved response from weather api
export const getWeatherResults = async (weatherSearchParams)=>{
    try {
        const searchParam = buildWeatherSearchParam(weatherSearchParams)
        const result = await axios.get(`${process.env.REACT_APP_WEATHER_BASE_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchParam}&aqi=no`)
        return getUIWeatherResponse(result)
    }
    catch(e){
        return {status:e.response.status}
    }
}

// getUIWeatherResponse customize the response meets ui request
export const getUIWeatherResponse = (weatherAPIResponse) =>{
    let weatherInfo = {}
    if (weatherAPIResponse.status === 200) {
      const { name, region, country, localtime } = weatherAPIResponse.data.location 
      const { condition, temp_c } = weatherAPIResponse.data.current 
      const { text } = condition 
      weatherInfo = { name: name, region: region, country: country, localtime: localtime, text: text, temp_c: temp_c,status:weatherAPIResponse.status}
      return weatherInfo
    }
    return {status:weatherAPIResponse.status}
}

//buildWeatherSearchParam return the comma separated string param for the given input
export const buildWeatherSearchParam = (weatherSearchParams) =>{
    const {city,country} = weatherSearchParams
   return city !=="" & country !== "" ? `${city},${country}`: city === "" ? country:city 
}