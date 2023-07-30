import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import Home from '../Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const BrowseRoute=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>      
    );
}
const GlobalLoader = (props) => {
    
  const [valForLoader,setValForLoader]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setValForLoader(false);
    },6000)
  },[])

    return (
        <>
            {valForLoader?<Loader/>:<BrowseRoute/>}
        </>
    );
}

export default GlobalLoader;
