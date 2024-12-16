import React from 'react';
import style from './Home.module.css';
// import resume from '../../../../public/assets/resume/nitin_resume.pdf';

const Home = () => {
    const newWindowOpen=()=>{
        let resume=`${process.env.PUBLIC_URL}/assets/resume/nitinResume.pdf`;
        window.open(resume,'_blank');
    }
    return (
        <section className={style.homeBody}>
            <div className={style.content}>
                <h1 className={style.h1}>
                    ^_^ hi, i'm nitin batra <span className={style.green}>!</span>
                </h1>
                <p className={style.para}>software engineer & open source contributor</p>
                <div className={style.buttonBox}>
                    <button className={style.button} onClick={newWindowOpen}>
                        Resume&nbsp;&nbsp;
                        <i className="bi bi-arrow-up-circle-fill">
                        </i>
                    </button>
                </div>
            </div>  
            </section>
    );
}

export default Home;
