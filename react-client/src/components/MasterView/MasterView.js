import React,{ useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";

import { Box, Grid } from "@mui/material";
const ProductMasterCard = React.lazy(() => import("./ProductMasterCard.js.js"))

const MasterView = () => {

    const [products, setProducts] = useState([]); //local state to store product data

    //async function to get all product data
    async function fetchData() {
        let response = await  axios.get(" https://fakestoreapi.com/products/") //GET req
        let data = response.data;
        setProducts(data);
        console.log(products);
    }
    //fetch product data on page render
    useEffect(() =>{
       fetchData();
    }, [])
    
    //a function to map over product data and create cards
    const createProductCards = () => {
        if(products.length > 0){
            return products.map((product) => {
                return (
                    <Suspense fallback={<Box>Loading...</Box>}>
                    <ProductMasterCard product={product}/>
                    </Suspense>
                )
            })
        }
    }

    return(
        <Box sx={{
                width:"100%",
                display:"flex",
                justifyContent:"center"
        }}>
        <Grid 
            container spacing={.5}
            justifyContent="center" 
            sx={{marginTop:1/100, width:"95vw"}}
            >
            {createProductCards()}
        </Grid>
        </Box>
    )
}

export default MasterView;
