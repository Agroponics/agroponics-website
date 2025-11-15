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

                <section className={styles.subteamCards}>
                    <h1>Sub-Teams</h1>
                    <div>
                        <div className={styles.auto} onClick={() => router.push('#automation')}>
                            <h2>Automation</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"/></svg>
                        </div>
                        <div className={styles.plnt} onClick={() => router.push('#plants')}>
                            <h2>Plants</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M450-130v-309h-20q-64 0-120.5-24.5T209-533q-44-45-66.5-104T120-760v-80h78.32Q260-840 317-815.5 374-791 419-746q33 34 54.5 76t30.5 89q7.65-11.9 16.82-22.95Q530-615 540-626q45-45 102-69.5T761.67-720H840v80q0 64-23.98 123T748-413q-45 45-101.56 69T528-320h-18v190h-60Zm1-370q0-61-20-113.5t-55-89q-35-36.5-86-57T180-780q0 63 18.5 115.5T252-575q42 45 90.5 60T451-500Zm59 120q60 0 111-19.5t86-56q35-36.5 54-89T780-660q-60 0-111 20.5T583-583q-43 45-58 94t-15 109Zm0 0Zm-59-120Z"/></svg>
                        </div>
                        <div className={styles.struct} onClick={() => router.push('#structure')}>
                            <h2>Structure</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z"/></svg>
                        </div>
                    </div>
                </section>

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