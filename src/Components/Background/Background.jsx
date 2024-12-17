import React from 'react';
import styles from './Background.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const Background = () => {
    return (
        <main className={styles.main}>
            <ul className={styles.list}>
                <li><NavLink to='/background' className={styles.red}>education</NavLink></li>
                <li><NavLink to='skills' className={styles.yellow}>skills</NavLink></li>
                <li><NavLink to='achievements' className={styles.green}>achievements</NavLink></li>
            </ul>
            <section className={styles.outletSection}>
                <Outlet/>
            </section>
        </main>
    );
}

export default Background;
