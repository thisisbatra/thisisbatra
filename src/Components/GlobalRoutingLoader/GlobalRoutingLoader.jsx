import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import VersionOne from '../VersionOne/VersionOne';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import ComingSoon from '../ComingSoon/ComingSoon';
import Home from '../VersionOne/Home/Home';

const BrowseRoute=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<VersionOne/>}>
                    <Route index element={<Navigate to='/home'/>} />
                    <Route path='home' element={<Home/>}/>
                </Route>
                <Route path='comingSoon' element={<ComingSoon/>}/>
                <Route path='*' element={<PageNotFound/>}/>
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
