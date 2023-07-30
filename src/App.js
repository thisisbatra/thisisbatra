import React, { useEffect, useState } from 'react';
import Home from './Components/Home/Home';
import Loader from './Components/Loader/Loader';

const App = (props) => {

  const [valForLoader,setValForLoader]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        setValForLoader(false);
    },2000)
  },[])

  return (
    <>
      {valForLoader?<Loader/>:<Home/>}
    </>
  );
}

export default App;
