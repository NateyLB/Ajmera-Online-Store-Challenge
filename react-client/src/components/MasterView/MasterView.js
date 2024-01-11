import { React, useEffect, useState } from "react";
import axios from "axios";

import ProductMasterCard from "./ProductMasterCard.js";
import { Box, Grid } from "@mui/material";

const MasterView = () => {

    const [products, setProducts] = useState([]); //local state to store product data

    async function fetchData() {
        let response = await  axios.get(" https://fakestoreapi.com/products/") //GET req
        let data = response.data;
        setProducts(data);
        console.log(products);
    }

    useEffect(() =>{
       fetchData();
    }, [])
    
    const createProductCards = () => {
        if(products.length > 0){
            return products.map((product) => {
                return (
                    <ProductMasterCard product={product}/>
                )
            })
        }
    }

    return(
        <Grid 
            container spacing={.5}
            // justifyContent="center" 
            sx={{marginTop:1/100, width:"95vw"}}
            >
            {createProductCards()}
        </Grid>
    )
}

export default MasterView;
