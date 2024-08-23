import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css";
import ButtonStyles from "../styles/Buttons.module.css";
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
                <title>AgroPonics UBC || About Us</title>
                <meta name="UBC AgroPonics" content="UBC's first and only hydroponics engineering design team."/>
            </Head>
            <Navbar />
            <main className={styles.main}>
                <section className={styles.heading}>
                    <div>
                        <span>About Us</span>
                    </div>
                </section>

                <section className={styles.goals}>
                    <h2 className={styles.header}>Our goals</h2>
                    <div className={styles.info}>
                        <p className={styles.desc}>
                            Our team is currently working on turning an old trailer into an automated hydroponic arugula farm. 
                            Ultimately we aim to completely automate the process without anyone needing to step in the trailer for weeks at a time. 
                            Each of our different subteams address unique challenges and goals:                       
                        </p>
                    </div>              
                </section>

                <section className={styles.subteams}>
                    <h1>Subteams</h1>
                    <div>
                        <div>
                            <h2>Automation</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                        <div>
                            <h2>Plants</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                        <div>
                            <h2>Structure</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.automation} id="automation">
                    <Image 
                        className={styles.subteamIMG}
                        src={temp}
                        lt='Our logo'
                    />
                    <div>
                        <h1>AUTOMATION</h1>
                        <p>
                            Automation is responsible for making the hydroponic farm fully automatic so that it requires minimal human interaction.
                            This means programming a system that uses various sensors and mechanisms to care for the plants and keep them at optimal growing conditions. 
                            This will later involve creating a web application that monitors conditions in the trailer, creating an AI to identify when plants are ready to harvest, 
                            and building a robot that harvests, transfers and stores crops for pickup.
                        </p>
                    </div>
                </section>

                <section className={styles.plants} id="plants">
                    <div>
                        <h1>PLANTS</h1>
                        <p>
                            The plants team does the research to figure out how to optimize a hydroponic setup to grow the best possble crops.
                            This involves investigating various conditions to see their effects on plant quality and growth speed when using hydroponics, 
                            and experimenting with plants that aren't typically grown in a hydroponic system (e.g. tomatoes).
                        </p>
                    </div>
                    <Image 
                        className={styles.subteamIMG}
                        src={temp}
                        alt='Our logo'
                    />
                </section>

                <section className={styles.structure} id="structure">
                    <Image 
                        className={styles.subteamIMG}
                        src={temp}
                        alt='Our logo'
                    />
                    <div>
                        <h1>STRUCTURE</h1>
                        <p> 
                            Without the structure team, our plants wouldn't have a home. 
                            Structure builds the hyrdroponic setup itself, as well as the trailer its stored in.
                            This includes woodworking, insulation, heating, the electrical power system, water systems. 
                            For the future we currently plan to implement solar panels to power the setup and creating a rain-catch system to get water.
                        </p>
                    </div>
                </section>

                <div className={styles.interest}>
                    <h1 className={styles.header}>Interested in Joining?</h1>
                    <button onClick={() => router.push('/join')}>Apply here!</button>
                </div>
            </main>
            <Footer />
        </>
    );
}