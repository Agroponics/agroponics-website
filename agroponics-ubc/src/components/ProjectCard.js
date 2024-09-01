import React from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
            <h3>{props.text}</h3>
            <Image
                src={props.img}
            />
        </div>
      );
}

export default ProjectCard;