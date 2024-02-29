import React from 'react';
import styles from '../styles/Main.module.css';
import Image from 'next/image';

function SponsorCard(props) {
  return (
    <div className={styles.sponsorCard}>
        <Image 
            src={props.img}
        />
        <span>{props.name}</span>
    </div>
  );
}

export default SponsorCard;
