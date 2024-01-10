import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import { AppBar, Toolbar, Typography } from "@mui/material";


const Nav = () => {

    return(
        <AppBar position="static">
        <Toolbar sx={{display: "flex", flexDirection: "row", width: "100%", alignContent: "center", justifyContent: "center" }}>
            <MenuIcon sx={{marginRight: "25%"}} fontSize="small" color="black"/>
            <Typography variant="h5" component="a" fontSize="medium">
                Website Title
            </Typography>
            <SearchIcon sx={{marginLeft:"25%"}} fontSize="small"/>
            <ShoppingCartOutlinedIcon fontSize="small" />
        </Toolbar>
        </AppBar>
    );

}

export default Nav;