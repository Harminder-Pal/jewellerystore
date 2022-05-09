import React,{useState, useEffect} from 'react';
import Header from './header';
import { product } from '../services/productServices';
import JewelryFooter from './jewellryFooter';
import {useParams} from 'react-router-dom';

export default function AboutUs() {
    
    useEffect(async () => {
        

        const result = await product.AboutUsApi();
    
        console.log(result)    
       
    
      }, [])
    return (
        <>
        {/* <Header /> */}
            <div >
               <h4>CONTENT IS COMING SOON.......</h4>
            </div>
            {/* <JewelryFooter /> */}
        </>
    )
}