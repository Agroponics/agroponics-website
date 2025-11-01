/*
    The website's Title Card component, featured at the top of many pages

    It has a parallax background and displays whatever text is put in the 'text' prop.

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import React from 'react';
import styles from '../styles/TitleCard.module.css';

function TitleCard(props) {
    return (
        <div className={styles.titleCard}>
            <div>
                <h1>{props.text}</h1>
            </div>
        </div>
      );
}

export default TitleCard;