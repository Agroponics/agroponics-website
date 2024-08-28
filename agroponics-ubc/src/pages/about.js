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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"/></svg>
                        </div>
                        <div className={styles.plnt} onClick={() => router.push('#plants')}>
                            <h2>Plants</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M450-130v-309h-20q-64 0-120.5-24.5T209-533q-44-45-66.5-104T120-760v-80h78.32Q260-840 317-815.5 374-791 419-746q33 34 54.5 76t30.5 89q7.65-11.9 16.82-22.95Q530-615 540-626q45-45 102-69.5T761.67-720H840v80q0 64-23.98 123T748-413q-45 45-101.56 69T528-320h-18v190h-60Zm1-370q0-61-20-113.5t-55-89q-35-36.5-86-57T180-780q0 63 18.5 115.5T252-575q42 45 90.5 60T451-500Zm59 120q60 0 111-19.5t86-56q35-36.5 54-89T780-660q-60 0-111 20.5T583-583q-43 45-58 94t-15 109Zm0 0Zm-59-120Z"/></svg>
                        </div>
                        <div className={styles.struct} onClick={() => router.push('#structure')}>
                            <h2>Structure</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#000000"><path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z"/></svg>
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
                    <a href='https://forms.gle/1xvmDm1rFjiyZ1GU9'>
                        <button className={ButtonStyles.glow}>Apply here!</button>
                    </a>
                </div>
            </main>
            <Footer />
        </>
    );
}