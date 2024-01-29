
import Login from "./pages/Login";
import Home from "./pages/Home";
import Booking  from "./pages/Booking";
import Product from "./pages/Product";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
 
} from "react-router-dom";



const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
       
        <Route path="/home"element={ <Home />}/>
        <Route path="/product"element={ <Product />}/>
        <Route path="/booking"element={ <Booking />}/>
      </Routes>
    </Router>
  );
};

export default App;