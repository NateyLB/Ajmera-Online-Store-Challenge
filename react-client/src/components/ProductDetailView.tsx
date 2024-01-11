import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, CardHeader, CardMedia, Typography, Rating, Container, Chip, Box } from "@mui/material";
import { useParams } from "react-router-dom";

interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating:{
        rate: number,
        count: number
    }
}

const ProductDetailView = () => {

    let { productID } = useParams();
    const [product, setProduct] = useState<Product>({
        id: -1,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating:{
            rate: 0,
            count: 0
        }
    });

    async function fetchData() {
        let response = await axios.get(`https://fakestoreapi.com/products/${productID}`) //GET req
        let data = response.data;
        setProduct(data);
    }

    useEffect(() =>{
       fetchData();
    }, [product])
    return(
        <Card sx={{
                width:"100vw",
                height:{xs:1},
                // justifyContent:"center",
                // alignContent:"center"
                }}>
            <CardContent sx={{height:{xs:"1vh"}, paddingBottom:{xs:0}}}>
                <Typography sx={{height:{xs:"1vh"}}}>
                    {product.category}
                </Typography>
            </CardContent>
            <CardHeader 
                title={product.title} 
                sx = {{height:{xs:"10vh", sm:"6vh"}, paddingTop:{xs:0}}}/>
            {/* <div style= {{ 
                    display:"flex",
                    justifyContent:"center"
            }}> */}
            <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                height={1}
                sx = {{
                        height:{xs:.8,sm:.8, md:0.4, lg:.2,}, 
                        width:{xs:.8, sm:.8, md:0.4, lg:.2},
                        marginLeft:{xs:"8vw", md:"2vw"}
                    }}
            />
            {/* </div> */}
            <Box sx={{justifyContent:"flexStart", display:"flex", margin:"none", paddingLeft: 1.5}}>
                <Rating name="half-rating" value={product.rating ? product.rating.rate : 0} precision={0.1} size="medium" />
                <Chip label={product.rating ? product.rating.count : 0} variant="outlined" size="small"/>
            </Box>
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

