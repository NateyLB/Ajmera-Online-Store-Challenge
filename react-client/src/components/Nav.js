import React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';import { AppBar, Toolbar, Link } from "@mui/material";


const Nav = () => {

    return(
        <AppBar position="static" >
        <Toolbar id="tool" sx={{padding:"0!important", display: "flex", flexDirection: "row", width: "100%", alignContent: "center", justifyContent: "center", paddingRight:0 }}>
            <MenuIcon sx={{marginRight: "20%"}} fontSize="medium" color="black"/>
            <Link variant="h6" color="inherit" underline="none" href="/">
                eCommerce
            </Link>
            <SearchIcon sx={{marginLeft:"20%"}} fontSize="medium"/>
            <ShoppingCartOutlinedIcon fontSize="medium" />
        </Toolbar>
        </AppBar>
    );

}

export default Nav;