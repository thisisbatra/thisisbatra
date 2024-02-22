import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className={style.groupLogo}>
                <span><i className="bi bi-instagram"></i></span>
                <span><i className="bi bi-linkedin"></i></span>
                <span><i className="bi bi-github"></i></span>
                <span><i className="bi bi-code-slash"></i></span>
            </div>
            <h1>this website is developed & maintained by Nitin Batra</h1>
        </footer>
    );
}

export default Footer;
