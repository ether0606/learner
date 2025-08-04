import React from 'react';
import Header from '../component/Header'
import Footer from '../component/Footer'

import '../assets/importfile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/main.css';
 
function Weblayout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>     
     
  )
}

export default Weblayout