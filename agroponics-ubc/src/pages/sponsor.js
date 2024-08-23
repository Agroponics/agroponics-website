import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/Main.module.css";
import Logo from "../images/logo.png"
import Image from "next/image";
import { useRouter } from 'next/router';
import temp from '../images/temp.jpg'

export default function Sponsor() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Agroponics UBC</title>
                <meta name="UBC Agroponics | Join" content="Join our team"/>
                <link rel="icon" href="../images/temp.jpg"/>
            </Head>
            <Navbar/>
            <main>
                <div className={styles.form}>

                </div>
            </main>
            <Footer/>
        </>
    );
}
