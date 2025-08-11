import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';

import { CartProvider, useCart } from "react-use-cart";
import About from './pages/About';
import Home from './pages/Home';
import Courses_page from './pages/Courses_page';

/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Categories from './Admin/Categories';
import Courses from './Admin/Courses';
import Protected from './Admin/protected';


function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    /* if you want, user will be logged in until they logout*/
    //return localStorage.getItem("access_token") || false;
    /* if you want, user will be logged when they close the browser*/
    return sessionStorage.getItem("access_token") || false;
  });
  
  return (
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course" element={<Courses_page />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          
          {/* Admin route */}
          <Route path= {"/admin/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/admin/user"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Users /> 
           </Protected>
           } />
          <Route path= {"/admin/categories"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Categories /> 
           </Protected>
           } />
          <Route path= {"/admin/courses"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Courses /> 
           </Protected>
           } />
        </Routes>
    </CartProvider>
  );
}

export default App;
