import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import PageNotFound from './Components/PageNotFound/PageNotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import Background from './Components/Background/Background';
import Education from './Components/Background/Education/Education';
import Skills from './Components/Background/Skills/Skills';
import Achievements from './Components/Background/Achievements/Achievements';
import Project from './Components/Project/Project';

const App = () => {
  return (
    <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/background' element={<Background/>}>
                    <Route index element={<Education/>}/>
                    <Route path='achievements' element={<Achievements/>}/>
                    <Route path='skills' element={<Skills/>}/>
                </Route>
                <Route path='/project' element={<Project/>}/>
                <Route path='/contact' element={<Contact/>}/>
                {/* <Route path='*' element={<PageNotFound/>}/> */}
            </Routes>
            <Footer/>
    </BrowserRouter>
  );
}

export default App;

