import './App.css';
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Services from './screens/Services';
import Products from './screens/Products';
import SignUp from './screens/SignUp';
import Home from './screens/Home';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/react_first_website/" element={<Home />} />
          <Route path="/react_first_website/services" element={<Services />} />
          <Route path="/react_first_website/products" element={<Products />} />
          <Route path="/react_first_website/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
