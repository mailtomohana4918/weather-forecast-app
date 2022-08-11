import { Typography, Box, Card, CardMedia, CardContent } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import React from "react"
import weather from '../../weather.jpg'

const useStyles = makeStyles(() => ({
    boxContainer: {
        paddingTop: "24px",
        width: "600px",
        paddingLeft: "18px",
        paddingRight: "18px"
    }
}));

//component renders when there is a error response from the server
export const TechnicalError = () => {
    const classes = useStyles();
    return (
        <Box className={classes.boxContainer}>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={weather}
                    alt="weather"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        Sorry, there's been an error
                    </Typography>

                    <Typography variant='body2'>We can't do what you've asked right now due to an error on our end.</Typography>
                    <Typography variant='body2'>Please try again later.</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}



