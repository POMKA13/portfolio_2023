import React from "react";
import {AiOutlineLinkedin} from "@react-icons/all-files/ai/AiOutlineLinkedin";
import {VscGithub} from "@react-icons/all-files/vsc/VscGithub";
import styles from './Footer.module.css'
import {FiInstagram} from "@react-icons/all-files/fi/FiInstagram";


const Footer = () => {
    return (
        <footer>
            <div className={styles.container}>
                    <li><a href='https://www.linkedin.com/in/roman-lisachenko/' target='_blank' alt='LinkedIn'><AiOutlineLinkedin/></a></li>
                    <li><a href='https://github.com/POMKA13?tab=repositories' target='_blank' alt='GitHub'><VscGithub/></a></li>
                    <li><a href='https://www.instagram.com/romka_angler/' target='_blank' alt='Gmail'><FiInstagram/></a></li>
            </div>
        </footer>
    )
}

export default Footer