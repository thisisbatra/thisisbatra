import React from 'react';
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <section className={styles.section}>
                <div className={styles.circle}></div>
                <div className={styles.square}></div>
                <div className={styles.triangle}></div>
        </section>
    );
}



export default Loader;
