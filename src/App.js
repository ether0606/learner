import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import About from './pages/About';
import Home from './pages/Home';

/* admin route */
import Login from './Admin/Login';
import Register from './Admin/Register';
import Dashboard from './Admin/Dashboard';
import Users from './Admin/Users';
import Useradd from './Admin/Useradd';
import Protected from './Admin/protected';


function App() {
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    return localStorage.getItem("access_token") || false;
  });
  
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
          <Route path="/admin/add-user" element={<Useradd />} />
        </Routes>
    </>
  );
}

export default App;
