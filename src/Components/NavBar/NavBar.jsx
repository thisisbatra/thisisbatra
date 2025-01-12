import React from 'react';
import { NavLink, useNavigate,useLocation } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import styles from './navBeauty.module.css';
const NavBar = () => {
    let navigate=useNavigate();
    let location=useLocation();
    let navigateForContactUs=()=>{navigate('/contact');}
    let toggleBtn=()=>{
        let x=document.getElementById("brightnessIcon");
        let y=document.getElementById("ulList");
        console.log(x.className+" "+y.className);
    }
    return (
        <nav className={styles.nav}>
            <span className={styles.thumbNail}>
                <img src="../assets/meThumb.png" alt="thumbnail"/>
                <h1>thisisbatra</h1>
            </span>
            <ul className={`${styles.list}`} id="ulList">
                <li><NavLink to='/' className={location.pathname==='/'?styles.active:""}>home</NavLink></li>
                <li><NavLink to='/about' className={location.pathname==='/about'?styles.active:""}>about</NavLink></li>
                <li><NavLink to='/background'
                 className={location.pathname.includes("/background")?styles.active:""}>
                    background</NavLink>
                </li>
                <li><NavLink to='/project' className={location.pathname==='/project'?styles.active:""}>project</NavLink></li>
            </ul>
            <span className={location.pathname==='/contact'?styles.connectBtnActive:styles.connectbtn} onClick={navigateForContactUs}>
                <p>Let's catch up!</p>
                <FaArrowRight/>
            </span>
            <span className={styles.menuBar} onClick={toggleBtn}>
                <i className="bi bi-three-dots-vertical"></i>
            </span>
        </nav>
    );
}

export default NavBar;
