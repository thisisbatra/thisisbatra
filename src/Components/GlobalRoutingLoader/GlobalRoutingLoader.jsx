import React, { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import VersionOne from '../VersionOne/VersionOne';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';
import ComingSoon from '../ComingSoon/ComingSoon';

const BrowseRoute=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<VersionOne/>}/>
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
