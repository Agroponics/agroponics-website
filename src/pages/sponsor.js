import React from "react";
import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/Sponsor.module.css";
import { useRouter } from 'next/router';

export default function Sponsor() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Agroponics UBC || Sponsor Us</title>
            </Head>
            <Navbar/>
            <main>
               <section className={styles.heading}>
                    <div>
                        <span>Sponsor Us</span>
                    </div>
                </section>
                <section className={styles.sponsor}>
                    
                    

                </section>
                <section className={styles.currentSponsors}>
                    
                </section>


                <div className={styles.text}>
                    <p>
                        The Agroponics project aims to address critical issues in modern agriculture, including water scarcity, soil depletion, and the need for sustainable farming practices. By developing an autonomous hydroponic system, the project seeks to optimize resource use, reduce environmental impact, and enhance crop yields. The project's objectives include the integration of IoT technologies for real-time monitoring and control, structural renovations to create a controlled growth environment, and experimental research to refine plant growth conditions.
                        Funding is critical in advancing these objectives by supporting the acquisition of essential technologies, including sensors, microcontrollers, and structural materials. It enables the team to prototype and implement IoT systems for real-time monitoring and control, renovate the physical space to house the hydroponic systems, and conduct in-depth research on optimizing plant growth conditions. Your help will ensure the project's success in advancing sustainable agricultural practices. 
                    </p>
                </div>
                <div className={styles.sponsors}>

                </div>
            </main>
            <Footer/>
        </>
    );
}
