import React from 'react';
import style from './Home.module.css';

const Home = () => {
    return (
        <section>
            <h1>
                ^_^ hi, i'm nitin batra !
            </h1>
            <p>a fullstack developer & a tech enthusiast</p>
            <input type="button" value="resume" className={style.button}/>
        </section>
    );
}

export default Home;
