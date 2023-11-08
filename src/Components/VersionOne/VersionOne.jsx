import React from 'react';
import NavBar from './NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const VersionOne = () => {
    return (
        <>
            <nav>
                <ThemeChanger/>
                <NavBar/>
                <ThumbNail/>
            </nav>
            <Outlet/>
            <footer>
                <FollowPalette/>
                <h1>this website is developed & maintained by Nitin Batra</h1>
            </footer>
        </>
    );
}

const ThemeChanger=()=>{
    return(
        <i className="bi bi-brightness-high"></i>
    )
}

const ThumbNail=()=>{
    return(
        <div>
            <img src="../assets/meThumb.png" alt="thumbnail"/>
            <h1>thisisbatra</h1>
        </div>
    )
}

const FollowPalette=()=>{
    return(
        <div>
            <div><i className="bi bi-instagram"></i></div>
            <div><i className="bi bi-linkedin"></i></div>
            <div><i className="bi bi-github"></i></div>
            <div><i className="bi bi-code-slash"></i></div>
        </div>
    )
}

export default VersionOne;
