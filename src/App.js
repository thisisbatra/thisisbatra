import React, { useEffect, useState } from 'react';
import Loader from "./Components/Loader/Loader";


const App = (props) => {

  const [valForLoader,setValForLoader]=useState(true);
  useEffect(()=>{

  },[])
  return (
    <Loader/>
  );
}

export default App;
