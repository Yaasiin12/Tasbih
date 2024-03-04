import React from "react";
import { ReactDOM } from "react";
import {createRoot} from 'react-dom/client';
import './style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ImageSlider from "./components/ImageSlider"


const root = document.getElementById("root");
createRoot(root).render(

 
    <div>
       
        <Header/>
        <ImageSlider/>
        <Footer/>
    </div>
 
);