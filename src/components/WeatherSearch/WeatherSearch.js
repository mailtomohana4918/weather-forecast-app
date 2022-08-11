import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Button, Grid, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import {Header} from '../Header'
import { getWeatherResults } from '../../api/weatherApi'
import { WeatherApp } from '../WeatherApp'
import {convertTemperature} from '../../utils/convertTemperature'

const useStyles = makeStyles((theme) => ({

  textBoxContainer: {
    paddingTop: "45px",
  },
  boxContainer: {
    paddingTop: "40px",
  },
  butonContainer: {
    paddingTop: "40px",
  }
  
}))

//component renders when the app started provides the users to search weather info
export const WeatherSearch = () => {

  const classes = useStyles();
  const [scale, setScale] = React.useState('celsius');
  const [searchResult, setSearchResult] = useState({})
  const [weatherSearchParams, setWeatherSearchParams] = useState({
    city: "",
    country: "",
  });
  const [formError, setError] = useState(false);
  const [isSearchComplete, setIsSearchComplete] = useState(false)
  const updateField = (e) => {
    
    e.preventDefault()
    setWeatherSearchParams({
      ...weatherSearchParams,
      [e.target.name]: e.target.value,
    });
    
    setError(false)

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(weatherSearchParams.city === "" && weatherSearchParams.country === "")
    {
      setError(true)
      setIsSearchComplete(false)
    }
    else
    {
      setError(false)
    const result = await getWeatherResults(weatherSearchParams)
    setSearchResult(result)
    setIsSearchComplete(true)
    setWeatherSearchParams({
      city: "",
      country: "",
    })
    }
  };

  const handleChange = (event) => {
    setScale(event.target.value);
  };

  const getSearchResultwithTemperatureScale =() =>{
    const temperature = convertTemperature(searchResult.temp_c,scale)
    return {...searchResult,temperature}
  }

  return (
      <>
      <Grid container justifyContent="center">
        <Header />
        <form onSubmit={handleSubmit}>
          <Box className={classes.boxContainer}>
            <Box className={classes.textBoxContainer}>
              <Box>
                <TextField
                  name="city"
                  value={weatherSearchParams.city}
                  variant="outlined"
                  placeholder="Enter city"
                  onChange={updateField}
                  className={classes.textField}
                  fullWidth
                  error={formError}
                  inputProps={{ "data-testid": "city-test-id" }}
                />
              </Box>
            </Box>
            <Box className={classes.textBoxContainer}>
              <Box mr={2}>
                <TextField
                  name="country"
                  value={weatherSearchParams.country}
                  variant="outlined"
                  placeholder="Enter country"
                  onChange={updateField}
                  className={classes.textField}
                  fullWidth
                  inputProps={{maxLength:60,"data-testid": "country-test-id" }}
                  error={formError}
                />
              </Box>
            </Box>
            <Box className={classes.textBoxContainer}>
              <RadioGroup
                value={scale}
                onChange={handleChange}
              >
                <FormControlLabel value="celsius" control={<Radio/>} label="Celsius" defaultValue={"celsius"} defaultChecked/>
                <FormControlLabel value="fahrenheit" control={<Radio />} label="Fahrenheit" />
              </RadioGroup>
            </Box>
            <Box className={classes.butonContainer}>
              <Button type="submit"  variant="contained" fullWidth color="primary" data-testid="search-button-test-id">
                Search
              </Button>
            </Box>
          </Box>
        </form>

      </Grid>
      <Grid container justifyContent="center"> {isSearchComplete && <WeatherApp weatherInfo={getSearchResultwithTemperatureScale()}/>}</Grid>
      </>

  );
}