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

//component renders when the response from the server is 404
export const BadRequest = () => {
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
                    <Typography gutterBottom variant="h5" >
                        No matching results found
                    </Typography>

                    <Typography variant='body2'>Please refine your search</Typography>
                </CardContent>
            </Card>
        </Box>
    )
}



