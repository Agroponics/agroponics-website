import React from "react";
import Head from "next/head";
import Link from "next/link";
import SponsorCard from "@/components/SponsorCard";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/Sponsor.module.css";
import { useRouter } from 'next/router';

/* IMAGE IMPORTS */
import ece from "@/images/sponsorIMGs/ece_logo.jpg"
import chbe from "@/images/sponsorIMGs/chbe_logo.png"
import fcc from "@/images/sponsorIMGs/fcc_logo.jpg"
import ieeecu from "@/images/sponsorIMGs/ieeecu_logo.png"
import lfs from "@/images/sponsorIMGs/lfs_logo.jpg"
import whgm from "@/images/sponsorIMGs/whgm_logo.png"




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
                    <p>
                        UBC Agroponics aims to address critical issues in modern agriculture, including water scarcity, soil depletion, and the need for sustainable farming practices by developing an autonomous hydroponic system that aims to optimize resource use, reduce environmental impact, and enhance crop yields. 
                        Funding is critical in advancing these objectives as it enables the team to prototype and implement IoT systems for real-time monitoring and control, renovate the physical space to house the hydroponic systems, and conduct in-depth research on optimizing plant growth conditions. 
                        Your help will ensure the project's success in advancing sustainable agricultural practices. 
                    </p>
                    <div>
                        <button className={styles.sendButton} name="From Uiverse.io by adamgiebl">
                        <div className={styles.svgwrapper}>
                            <div className={styles.svgwrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                fill="currentColor"
                                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                            </div>
                        </div>
                        <a href="mailto:agroponicsubc@gmail.com"><span>Email</span></a>
                        </button>


                    </div>
                </section>
                <section className={styles.currentSponsors}>
                    <h1>See our current sponsors!</h1>
                    <div className={styles.sponsorCardContainer} id="sponsors">
                        <SponsorCard name="UBC Department of Electrical & Computer Engineering" img={ece} />
                        <SponsorCard name="UBC Department of Chemical & Biological Engineering" img={chbe} />
                        <SponsorCard name="UBC Department of Land & Food Systems" img={lfs} />
                        <SponsorCard name="IEEE Carleton University" img={ieeecu} />
                        <SponsorCard name="Farm Credit Canada" img={fcc} />
                        <SponsorCard name="Walter H. Gage Memorial Fund" img={whgm} />
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}
