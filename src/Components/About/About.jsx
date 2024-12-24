import React from 'react';
import styles from './About.module.css';

const About = () => {
    return (
        <main className={styles.main}>
            <div className={styles.ImgDiv}>
                <img src="../assets/photos/melinkedIn.jpg" alt="meLinkedIn" className={styles.Img} />
                <div className={styles.ImgBorder}></div>
            </div>
            <section className={styles.contentSec}>
                <p>
                "Turning coffee into code is my superpower, with Java, React, Angular, SQL, and Spring Boot as my tools of choice. 
                I’m all about crafting seamless UIs, taming backend logic, and debugging with a side of caffeine. 
                Currently, 
                I’m leveling up in system design and DSA while striving to turn “it works on my machine” into universal truth. 
                Clean code, sharp IDEs, and a sprinkle of creativity keep me going. 
                For me, syntax errors are just plot twists, and every bug is an opportunity to shine (or cry a little inside first)."
                </p>
            </section>
        </main>
    );
}

export default About;
