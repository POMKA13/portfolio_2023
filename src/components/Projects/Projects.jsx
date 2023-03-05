import React from "react";
import styles from './Projects.module.css'
import Card from "../Home/Card/Card";

const Projects = (props) => {
    let cardItem = props.card.map(el => <Card image={el.image} title={el.title} title={el.title} skills={el.skills} link={el.link}/>)
    return (
        <section>
            <h2 className={styles.projects}>Projects</h2>
            <div className={styles.container}>
                {cardItem}
            </div>
        </section>
    )
}

export default Projects