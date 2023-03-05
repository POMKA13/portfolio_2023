import React from "react";
import styles from './Card.module.css'

const Card = (props) => {
    return (
        <div className={styles.card}>
            <img className={styles.img} src={props.image} alt={props.title}/>
            <a href={props.link} target='_blank' className={styles.title}>{props.title}</a>
            <p className={styles.skills}>{props.skills}</p>
        </div>
    )
}

export default Card