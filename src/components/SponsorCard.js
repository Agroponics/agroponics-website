/*
    This component is placed in the Sponsors page (https://ubcagroponics.com/sponsors)

    It shows the logo for our sponsor and links to the website when clicked.

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import Image from 'next/image';
import styles from '../styles/Sponsor.module.css';

function SponsorCard(props) {
    return (
        <>
            <a href={props.link} target='_blank'>
                <div className={styles.sponsorCard}>
                    <Image
                        src={props.img}
                        alt={props.name}
                        loading='lazy'
                    />
                    <span>{props.name}</span> 
                </div>
            </a>
        </>
      );
}

export default SponsorCard;