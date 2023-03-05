import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className={styles.menu}>
            <NavLink to='/' className={navData => navData.isActive ? styles.active : styles.item}>Home</NavLink>
            <NavLink to='/projects'  className={navData => navData.isActive ? styles.active : styles.item}>Projects</NavLink>
            <NavLink to='/contacts'  className={navData => navData.isActive ? styles.active : styles.item}>Contacts</NavLink>
        </nav>
    )
}

export default Navbar