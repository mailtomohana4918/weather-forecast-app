import { Typography, Box, Card, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import React from "react"
import weather from '../../weather.jpg'

const useStyles = makeStyles(() => ({
    boxContainer: {
        paddingTop: "24px",
        width: "600px",
        paddingLeft: "18px",
        paddingRight: "18px",      
    }
}));

//component renders for a successful response and displays weather info
export const WeatherResults = (props) => {
    const classes = useStyles();
    return (

        <Box className={classes.boxContainer}>
            <Card sx={{ maxWidth: 500}}>
                <CardMedia
                    component="img"
                    height="140"
                    image={weather}
                    alt="weather"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5">
                        Weather Summary
                    </Typography>
                    <Typography variant="body2" >
                        Weather: {props.text}
                    </Typography>
                    <Typography variant="body2" >
                        Country: {props.country}
                    </Typography>
                    <Typography variant="body2" >
                        City: {props.name}
                    </Typography>
                    <Typography variant="body2" >
                        Local Time: {props.localtime}
                    </Typography>
                    <Typography variant="body2" >
                        Temperature: {props.temperature}
                    </Typography>
                </CardContent>
            </Card>

        </Box>

    )
}



