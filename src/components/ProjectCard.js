import { useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

function ProjectCard(props) {
    const [showInfo,toggleWindow] = useState(false);
    const openWindow = () => {toggleWindow(true)};
    const closeWindow = () => {toggleWindow(false)};

    const newWindow = () => {
    }

    return (
        <>
            <div className={styles.projectCard} onClick={openWindow}>
                <Image
                    src={props.img}
                    alt='Project Image'
                />
                <h3>{props.cardTitle}</h3> 
            </div>

            <div className={showInfo ? (styles.blockBackground) : styles.hide} onClick={closeWindow}/>

            <div className={showInfo ? (styles.infoWindow) : styles.hide}>
                <button onClick={closeWindow}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#228B22"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                <div>
                    <div className={styles.information}>
                        <h3>{props.title}</h3>
                        <Image src={props.img} alt='Project Image'/>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </>
      );
}

export default ProjectCard;