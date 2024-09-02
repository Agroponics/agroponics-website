import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

function ProjectCard(props) {

    const [showInfo,toggleWindow] = useState(false);

    const toggleInfo = () => {

    }

    return (
        <>
            <div className={styles.projectCard}>
                <Image
                    src={props.img}
                />
                <h3>{props.text}</h3>
            </div>

            <div className={styles.blockBackground}>
                <div className={styles.infoWindow}>
                    <button oncli>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fefefe"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </button>
                    <div className={styles.information}>
                        <h3>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                    <div className={styles.images}>
                        <Image src={props.img0}/>
                        <Image src={props.img1}/>
                        <Image src={props.img2}/>
                    </div>
                </div>
            </div>
        </>
      );
}

export default ProjectCard;