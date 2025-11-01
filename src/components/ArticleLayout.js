/*
    The base layout used for each of the pages dynamically generated from the markdown files in \posts

    Not much to see here as you can tell

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import styles from "../styles/Projects.module.css";

export default function Layout({ children }) {
    return <div className={styles.post}>{children}</div>;
}