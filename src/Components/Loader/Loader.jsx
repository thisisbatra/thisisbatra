import React from 'react';
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <section className={styles.section}>
                <div>
                    <span className={styles.circle}>
                        <span className={styles.quarter}></span>
                    </span>
                    <span className={styles.square}></span>
                </div>
                <div>
                    <span className={styles.triangle}></span>
                </div>
        </section>
    );
}



export default Loader;
