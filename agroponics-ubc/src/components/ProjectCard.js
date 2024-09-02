import React from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

function ProjectCard(props) {
    return (
        <div className={styles.projectCard}>
            <Image
                src={props.img}
            />
            <h3>{props.text}</h3>
        </div>
      );
}

export default ProjectCard;