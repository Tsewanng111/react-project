  import './App.css';
import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './pages/home/homescreen';
import AboutMe from './pages/home/homescreen/AboutMe';
import ContactMe from './pages/home/homescreen/ContactMe';
import Portfolio from './pages/home/homescreen/MyPortfolio';
import Testimonials from './pages/home/Testimonials';

function App(){
    return(
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<AboutMe/>}/>
        <Route path='/Contact' element={<ContactMe/>}/>
        <Route path='/Portfolio' element={<Portfolio/>}/>
        <Route path='/Testimonials' element={<Testimonials/>}/>
       </Routes>
       
       </BrowserRouter>
      );
}
export default App;