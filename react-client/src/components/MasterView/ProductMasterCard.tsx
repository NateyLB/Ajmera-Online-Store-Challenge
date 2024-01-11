import { Card, CardContent, CardHeader, CardMedia, Typography, Rating, Container, Chip, Grid, CardActionArea } from "@mui/material";
import React from "react";

const ProductMasterCard = (props) =>{
    return(
        <Grid item xs={6} sm={4} md={4} lg={3} xl={2} sx={{padding:0}} >
        <Card sx={{height:{xs:700, sm:1}, width:{xs:1, sm:1}, padding:0}}>
            <CardActionArea sx={{height:1, width:1}} href={`/product/${props.product.id}`}>
            <CardHeader 
                title={props.product.title} 
                sx = {{height:1/4}}
                titleTypographyProps={{variant:"h6" }}
                />
            <CardMedia
                component="img"
                image={props.product.image}
                alt={props.product.title}
                sx = {{height:45/100}}
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