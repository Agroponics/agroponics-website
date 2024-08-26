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
import TitleCard from "@/components/TitleCard";

export default function About() {
    const router = useRouter();

    return(
        <>
            <Head>
                <title>AgroPonics UBC || About Us</title>
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

                <section className={styles.subteamCards}>
                    <h1>Subteams</h1>
                    <div>
                        <div className={styles.auto} onClick={() => router.push('#automation')}>
                            <h2>Automation</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                        <div className={styles.plnt} onClick={() => router.push('#plants')}>
                            <h2>Plants</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                        <div className={styles.struct} onClick={() => router.push('#structure')}>
                            <h2>Structure</h2>
                            <Image 
                                src={temp}
                                alt='Our logo'
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.subteams}>
                    <div className={styles.automation} id="automation">
                        <Image 
                            src={temp}
                            alt='Automation team'
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
                    </div>
                    
                    <div className={styles.plants} id="plants">
                        <div>
                            <h1>PLANTS</h1>
                            <p>
                                The plants team does the research to figure out how to optimize a hydroponic setup to grow the best possble crops.
                                This involves investigating various conditions to see their effects on plant quality and growth speed when using hydroponics, 
                                and experimenting with plants that aren't typically grown in a hydroponic system (e.g. tomatoes).
                            </p>
                        </div>
                        <Image 
                            src={temp}
                            alt='Plants Team'
                        />
                    </div>

                    <div className={styles.structure} id="structure">
                        <Image 
                            src={temp}
                            alt='Structure Team'
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
                    </div>
                </section>

                <div className={styles.interested}>
                    <TitleCard 
                        text="Interested?"
                    />
                    <button className={ButtonStyles.glow} onClick={() => router.push('/join')}>Apply here!</button>
                </div>
            </main>
            <Footer />
        </>
    );
}