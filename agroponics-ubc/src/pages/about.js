import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";
import Footer from "../components/Footer";
import { useRouter} from 'next/router';
import Image from "next/image";

// Image imports
import temp from "../images/temp.jpg";

export default function About() {
    const router = useRouter();

    return(
        <>
            <Head>
                <title>Agroponics UBC</title>
                <meta name="UBC Agroponics" content="UBC's first and only hydroponics engineering design team."/>
                <link rel="icon" href={temp}/>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <div className={styles.heading}>
                    <span>Who Are We?</span>
                </div>
                <section className={styles.goals}>
                    <h1 className={styles.header}>Our goals</h1>
                    <div className={styles.info}>
                        <p className={styles.desc}>
                            Our team is currently working on turning an old trailer into an automated hydroponic arugula farm. 
                            Ultimately we aim to completely automate the process without anyone needing to step in the trailer for weeks at a time. 
                            Each of our different subteams has divided the problem to tackle different challenges:                       
                        </p>
                        <Image
                            src={temp}
                            alt="The Trailer"
                        />  
                    </div>              
                </section>
                <section className={styles.automation}>
                    <h1>
                        Automation Team
                    </h1>
                    <div className={styles.info}>
                        <Image 
                            src={temp}
                        />
                        <p>
                            The automation team is the most futuristic and most useless of our subteams. 
                            Their goal is to fully automate the hydroponic farm so that it requires minimal human interaction.
                            This means programming a system that uses various sensors to automatically sustain the plants and keep them at optimal growing conditions. 
                            This will later involve creating a web application that monitors conditions in the trailer and convert it into helpful graphs anyone can interpret. 
                            Some future goals involve creating an AI to identify when plants are ready to harvest and send alerts via the app, and 
                            create a robot arm to harvest and transfer plants to storage without a human needing to step foot in the trailer.
                        </p>        
                    </div>
                </section>

                <section className={styles.plants}>
                    <h1>Plants Team</h1>
                    <div className={styles.info}>
                        <p>
                            The plants team is the heart of our team.
                            The goal is to research how growing plants hydroponically compares to traditional agricultural methods.
                            This will involve investigating optimal conditions to maximize plant quality and growth speed in a hydroponic system. 
                            and experimenting with plants that aren't typically grown in a hydroponic system (e.g. tomatoes).
                        </p>
                        <Image 
                            src={temp}
                        />                        
                    </div>
                </section>
                <section className={styles.structure}>
                    <h1>Structure Team</h1>
                    <div className={styles.info}> 
                        <p>
                            Without the structure team, our plants wouldn't have a home. 
                            Structure builds all the necessary structures for the plants, which includes insulation, heating, and power. 
                            In the future this will involve implementing solar panels to power the farm and creating a rain-catch system to get water.
                        </p>
                    </div>
                </section>

                <section>
                    <h1 className={styles.header}>Meet the team</h1>
                </section>
                <div className={styles.interest}>
                    <h1 className={styles.header}>Interested?</h1>
                    <button onClick={() => router.push('/join')}>Click here to apply!</button>
                </div>
            </main>
            <Footer />
        </>
    );
}