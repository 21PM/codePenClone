 import React from 'react'
 import {BrowserRouter,Routes,Route} from "react-router-dom"
import YourWork from '../pages/YourWork';
import Pen from '../pages/Pen';
import Profile from '../pages/Profile';
import LoginPage from '../components/LoginPage';
 function Routers() {
   return (
     
     
        // <BrowserRouter>

            <Routes>
                <Route path='/yourwork' element={<YourWork/>}/>
                <Route path='/pen' element={<Pen/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login' element={<LoginPage/>}/>
                <Route path="*" element={<h1>Page not found</h1>}/>
            </Routes>

        // </BrowserRouter>

   )
 }
 
 export default Routers;