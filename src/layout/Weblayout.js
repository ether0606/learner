import React from 'react';
import { CartProvider, useCart } from "react-use-cart";
import Header from '../component/Header'
import Footer from '../component/Footer'

import '../assets/importfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';
 
function Weblayout({children}) {
  return (
    <>
      <CartProvider>
        <Header />
        {children}
        <Footer />
      </CartProvider>
    </>     
     
  )
}

export default Weblayout