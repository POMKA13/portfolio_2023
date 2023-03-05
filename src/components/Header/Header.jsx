import React from 'react'
import Navbar from "./Navbar/Navbar";
import styles from './Header.module.css'
const Header = (props) => {
    return (
        <header>
            <div className={styles.container}>
                <div className={styles.title}>Frontend Developer <span className={styles.portfolio}>Portfolio</span>
                    </div>
                <Navbar/>
            </div>
        </header>
    )
}

export default Header