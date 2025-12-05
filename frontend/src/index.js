import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CookiesProvider } from "react-cookie";
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Homepage from './landing_page/home/homepage';

import Signup from './landing_page/signup/signup';
import Login from './landing_page/signup/login';
import Logout from './landing_page/signup/logout';
import AboutPage from './landing_page/about/aboutpage';
import ProductPage from './landing_page/products/productpage'; 
import Pricing from './landing_page/pricing/pricingpage';
import Support from './landing_page/support/supportpage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer';
import Notfound from './landing_page/Notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CookiesProvider>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/Pricing" element={<Pricing/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    

    <Route path="*" element={<Notfound/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </CookiesProvider>
);


