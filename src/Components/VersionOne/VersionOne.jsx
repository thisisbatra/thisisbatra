import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
// import styles from './VersionOne.module.css';

const VersionOne = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default VersionOne;
