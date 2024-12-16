import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Background from './Components/Background/Background';
import Blog from './Components/Blog/Blog';

const App = () => {
  return (
    <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                <Route path='background' element={<Background/>}/>
                <Route path='blog' element={<Blog/>}/>
                <Route path='contact' element={<Contact/>}/>
                <Route path='*' element={<PageNotFound/>}/>
            </Routes>
            <Footer/>
    </BrowserRouter>
  );
}

export default App;

