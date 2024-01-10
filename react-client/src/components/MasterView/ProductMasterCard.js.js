import { Card, CardContent, CardHeader, CardMedia, Typography, Rating, Container, Chip, Grid } from "@mui/material";
import React from "react";

const ProductMasterCard = (props) =>{
    return(
        <Grid item xs={6} >
        <Card sx={{height:1}}>
            <CardHeader 
                title={props.product.title} 
                sx = {{height:1/4}}
                titleTypographyProps={{variant:"h6" }}
                />
            <CardMedia
                component="img"
                image={props.product.image}
                alt={props.product.title}
                sx = {{height:1/2}}
            />
            <CardContent >
                <Typography>
                    ${props.product.price}
                </Typography>
                <Typography>
                    {props.product.category}
                </Typography>
            </CardContent>
        </Card>
        </Grid>
    )
}

export default ProductMasterCard;