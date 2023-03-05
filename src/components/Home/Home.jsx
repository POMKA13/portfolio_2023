import React from "react";
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.hello}>
            <h1 className={styles.content}>
                Hi, my name is <span className={styles.title}>Roman</span> <br/> <span className={styles.title2}>and I'm a beginner Frontend Developer!</span>
            </h1>

        </section>
    )
}

export default Home