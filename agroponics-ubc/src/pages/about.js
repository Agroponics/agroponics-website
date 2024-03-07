import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";

// Image imports
import temp from "../images/temp.jpg";

export default function About() {

    return(
        <>
            <Head>
                <title>Agroponics UBC</title>
                <meta name="UBC Agroponics" content="UBC's first and only hydroponics engineering design team."/>
                <link rel="icon" href={temp}/>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.goals}>
                    Our goals
                </section>
                <section>
                    Current projects
                </section>
                <section>
                    Meet the team
                </section>
            </main>
            <Footer />
        </>
    );
}