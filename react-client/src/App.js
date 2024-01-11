import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router"; 
import { Box } from "@mui/material"
import Nav from "./components/Nav.tsx";
import MasterView from './components/MasterView/MasterView.tsx';
import ProductDetailView from './components/ProductDetailView.tsx';

function App() {
  return (
    <Box >
        <Nav/>
        <Routes>
          <Route  exact path="/" element={<MasterView/>} />
          <Route path="/product/:productID" element={<ProductDetailView/>} />
        </Routes>
    </Box>
  );
}

export default App;
