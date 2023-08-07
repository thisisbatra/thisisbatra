import React from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from "./PageNotFound.module.css"
const PageNotFound = () => {
    const nav=useNavigate()
    const onRedirectclick=()=>{
        nav("/");
    }
    return (
        <>
            <section className={Styles.section}>
                <div className={Styles.div}>
                    <h1 className={Styles.heading}>404</h1>
                    <p className={Styles.para}>I am sorry, but the page you have requested was not found :(</p>
                    <div className={Styles.buttonBox}>
                        <button onClick={onRedirectclick} className={Styles.button}>Redirect</button>
                        <span className={Styles.buttonCase}></span>
                    </div>
                    
                </div>
            </section>
        </>
    );
}

export default PageNotFound;
