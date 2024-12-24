import React from 'react';
import styles from './Background.module.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Background = () => {
    let location=useLocation();
    return (
        <main className={styles.main}>
            <ul className={styles.list}>
                <li><NavLink to='/background' 
                    className={`${styles.red} ${location.pathname.endsWith("background")?styles.active:""}`}>education</NavLink>
                </li>
                <li><NavLink to='skills' 
                    className={`${styles.yellow} ${location.pathname.includes("skills")?styles.active:""}`}>skills</NavLink>
                </li>
                <li><NavLink to='achievements'
                     className={`${styles.green} ${location.pathname.includes("achievements")?styles.active:""}`}>achievements</NavLink>
                </li>
            </ul>
            <section className={styles.outletSection}>
                <Outlet/>
            </section>
        </main>
    );
}

export default Background;
