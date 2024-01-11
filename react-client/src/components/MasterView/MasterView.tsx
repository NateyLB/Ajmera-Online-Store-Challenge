import React,{ useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import LoadingIcons from "react-loading-icons";
import { Box, Grid } from "@mui/material";

const ProductMasterCard = React.lazy(() => import("./ProductMasterCard.tsx"))

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

interface ProductsState extends Array<Product>{};

const MasterView = () => {

    const [products, setProducts] = useState<ProductsState>([]); //local state to store product data

    //async function to get all product data
    async function fetchData() {
        //delay fetching data so we can see loading animations
        // setTimeout(async ()=>{
            console.log("delayed for 5 seconds")
            let response = await  axios.get(" https://fakestoreapi.com/products/") //GET req
        let data = response.data;
        setProducts(data);
        // }, 5000)
        
    }
    //fetch product data on page render
    useEffect(() =>{
        fetchData();
    }, [])
    
    //a function to map over product data and create cards
    //also contains a loading animation, please throttle network to see this animation. 
    const createProductCards = () => {
        if(products.length > 0){
            return products.map((product) => {
                return (
                    <Suspense fallback={<Grid item xs={6} sm={4} md={4} lg={3} xl={2} sx={{padding:0}} ><LoadingIcons.Puff stroke="black" speed="1" /></Grid>}>
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
