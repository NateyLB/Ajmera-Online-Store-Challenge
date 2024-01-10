import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardMedia, Typography, Rating, Container, Chip } from "@mui/material";


import {
    useParams
  } from "react-router-dom";

const ProductDetailView = () => {

    let { productID } = useParams();
    const [product, setProduct] = useState({});

    async function fetchData() {
        let response = await axios.get(`https://fakestoreapi.com/products/${productID}`) //GET req
        let data = response.data;
        setProduct(data);
        console.log(product.rating);
    }

    useEffect(() =>{
       fetchData();
    }, [product])
    return(
        <Card sx={{width:90/100}}>
            <CardContent>
                <Typography sx={{marginBottom: -5}}>
                    {product.category}
                </Typography>
            </CardContent>
            <CardHeader 
                title={product.title} 
                sx = {{height:1/6}}/>
            <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx = {{height:1/3}}
            />
            <Container sx={{justifyContent:"flexStart", display:"flex", margin:"none", paddingRight: 10/100}}>
                <Rating name="half-rating" value={product.rating ? product.rating.rate : 0} precision={0.1} size="medium" />
                <Chip label={product.rating ? product.rating.count : 0} variant="outlined" size="small"/>
            </Container>
            <CardContent>
                <Typography>
                    ${product.price}
                </Typography>
                <Typography>
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ProductDetailView;

