import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router"; 

import Nav from "./components/Nav";
import MasterView from './components/MasterView/MasterView';

function App() {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route  exact path="/" element={<MasterView/>} />
        </Routes>
    </div>
  );
}

export default App;
