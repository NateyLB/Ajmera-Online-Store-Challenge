import { React, useEffect, useState } from "react";
import axios from "axios";

const MasterView = () => {

    const [products, setProducts] = useState([]);

    useEffect(() =>{
        axios.get(" https://fakestoreapi.com/products/")
        .then(res => {
            setProducts(res);
        })
    })
    console.log(products)
    return(
        <><p>
            ajdasdasdas
        </p>
        </>
    )
}

export default MasterView;
