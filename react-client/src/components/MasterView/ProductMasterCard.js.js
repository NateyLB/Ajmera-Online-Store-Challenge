import { Card, CardContent, CardHeader, CardMedia, Typography, Rating, Container, Chip, Grid, CardActionArea } from "@mui/material";
import React from "react";

const ProductMasterCard = (props) =>{
    return(
        <Grid item xs={6} >
        <Card sx={{height:1}}>
            <CardActionArea href={`/product/${props.product.id}`}>
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
            <Container sx={{justifyContent:"flexStart", display:"flex", margin:"none", paddingRight: 10/100}}>
                <Rating name="half-rating" defaultValue={props.product.rating.rate} precision={0.1} size="medium" />
                <Chip label={props.product.rating.count} variant="outlined" size="small"/>
            </Container>
            <CardContent >
                <Typography>
                    ${props.product.price}
                </Typography>
                <Typography>
                    {props.product.category}
                </Typography>
            </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    )
}

export default ProductMasterCard;