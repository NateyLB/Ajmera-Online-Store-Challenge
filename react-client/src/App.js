import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router"; 

import Nav from "./components/Nav";
import MasterView from './components/MasterView/MasterView';
import ProductDetailView from './components/ProductDetailView';

function App() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route  exact path="/" element={<MasterView/>} />
          <Route path="/product/:productID" element={<ProductDetailView/>} />
        </Routes>
    </div>
  );
}

export default App;
