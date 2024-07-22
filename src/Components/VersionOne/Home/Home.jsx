import React from 'react';
import style from './Home.module.css';

const Home = () => {
    return (
        <section className={style.homeBody}>
            <div className={style.content}>
                <h1 className={style.h1}>
                    ^_^ hi, i'm nitin batra <span className={style.green}>!</span>
                </h1>
                <p className={style.para}>a fullstack developer & a tech enthusiast</p>
                <div className={style.buttonBox}>
                    <button className={style.button}>Resume&nbsp;&nbsp;<i className="bi bi-arrow-up-circle-fill"></i></button>
                </div>
            </div>  
            </section>
    );
}

export default Home;
