import React from "react";
import Head from "next/head";
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
                <div className={styles.form}>
                    <h3>Sponsor Our Team</h3>
                    <p>Send us an email if you are interested in supporting our team.</p>
                    <form  action="/api/form" method="post">
                        <input type="text" minLength={6}  required id="email" name="email" placeholder="Email"/>
                        <button type="submit" id="submit" onClick={() => router.push('/error')}>Submit</button>
                    </form>
                </div>
                <div className={styles.text}>
                    <p>
                        The Agroponics project aims to address critical issues in modern agriculture, including water scarcity, soil depletion, and the need for sustainable farming practices. By developing an autonomous hydroponic system, the project seeks to optimize resource use, reduce environmental impact, and enhance crop yields. The project's objectives include the integration of IoT technologies for real-time monitoring and control, structural renovations to create a controlled growth environment, and experimental research to refine plant growth conditions.
                        Funding is critical in advancing these objectives by supporting the acquisition of essential technologies, including sensors, microcontrollers, and structural materials. It enables the team to prototype and implement IoT systems for real-time monitoring and control, renovate the physical space to house the hydroponic systems, and conduct in-depth research on optimizing plant growth conditions. Your help will ensure the project's success in advancing sustainable agricultural practices. 
                    </p>
                </div>
                <div className={styles.sponsors}>
                    <a target="_blank">
                        <div>

                        </div>
                    </a>
                    <a target="_blank">
                        <div>

                        </div>
                    </a>
                    <a target="_blank">
                        <div>

                        </div>
                    </a>
                </div>
            </main>
            <Footer/>
        </>
    );
}
