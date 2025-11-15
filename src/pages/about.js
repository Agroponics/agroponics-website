/*
    The website's About Page

    Featured on https://ubcagroponics.com/about

    Created by Edan Steen
    Last Modified November 1st 2025
*/


import Head from "next/head";
import styles from "../styles/About.module.css";
import ButtonStyles from "../styles/Buttons.module.css";
import { useRouter} from 'next/router';
import Image from "next/image";

//Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitleCard from "../components/TitleCard";

// Image imports
import automationIMG from "../images/Tube.jpg";
import plantsIMG from "../images/radishes3.jpg";
import structureIMG from "../images/projectIMGs/structure.png";

export default function About() {
    const router = useRouter();

    return(
        <>
            <Head>
                <title>Agroponics UBC || About Us</title>
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
                        Agroponics UBC aims to revolutionize sustainable agriculture by developing advanced hydroponic systems that optimize resource use, reduce environmental impact, and enhance crop production through innovative technology and interdisciplinary collaboration.                       
                        </p>
                    </div>              
                </section>

                <h1 className={styles.header}>Sub-Teams</h1>

                <section className={styles.subteams}>
                    <div className={styles.automation} id="automation">
                        <Image 
                            src={automationIMG}
                            alt='Automation team'
                            loading='lazy'
                        />
                        <div>
                            <h1>AUTOMATION</h1>
                            <p>
                                The automation subteam is an Internet of Things (IoT) project that focuses on designing and implementing autonomous farming, real time monitoring, an auto-regulated environment, and remote updates for hydroponic systems. Our goal is to more efficiently use resources in agriculture (land, water, fertilizers, manpower) to help better improve our environment. Currently modern irrigation is exacerbating water scarcity and has dried up entire water systems. Land is also being cleared massively for agriculture. We use a large variety of technologies to collect and communi<span onClick={() => router.push("/cat")} className={styles.cat}>cat</span>e data from hydroponic systems to better learn how to simulate different preferred growing environments.
                            </p>
                        </div>
                    </div>
                    
                    <div className={styles.plants} id="plants">
                        <div>
                            <h1>PLANTS</h1>
                            <p>
                                The Plants subteam straddles the intersection of multiple disciplines, and not only from within Applied Science! We follow engineering principles and methods, but borrow a lot of techniques and approaches more typically found in chemistry, applied/plant biology, and food, nutrition, & health. Our sub-team’s primary goal is to ensure the successful growth and harvest of staple crops. Our secondary goals are to design new and innovative ways of growing these crops, and then optimize the growth conditions and designs through experimentation and data collection. Members in the Plants subteam participate heavily in research, frequently use analytical techniques, and are involved in every part of the team.
                            </p>
                        </div>
                        <Image 
                            src={plantsIMG}
                            alt='Plants Team'
                            loading='lazy'
                        />
                    </div>

                    <div className={styles.structure} id="structure">
                        <Image 
                            src={structureIMG}
                            alt='Structure Team'
                            loading='lazy'
                        />
                        <div>
                            <h1>STRUCTURE</h1>
                            <p> 
                                The Structure subteam combines the needs from the automation and plants subteams to  create spaces where our crops grow and the environment that surrounds them! Our current task is renovating an old 16-foot trailer adding insulation, heating, electrical, a rainwater collection system, and structural reinforcement to support a controlled environment for hydroponic systems. The work is quite varied, and we take on new and unexpected challenges as the needs of our team change. We are a very hands-on team that works hard to solve multi-scale problems collaboratively and innovatively.
                            </p>
                        </div>
                    </div>
                </section>
            
                <div className={styles.interested}>
                    <TitleCard 
                        text="Interested?"
                    />
                    <p>We would love to hear about your interest in Agroponics. Come join our team!</p>
                    <a onClick={() => router.push("/join")}>
                        <button className={ButtonStyles.sectionButton}>Apply here!</button>
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
}