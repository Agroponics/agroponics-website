import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import styles from "../styles/Sponsor.module.css";
import Logo from "../images/logo.png"
import Image from "next/image";
import { useRouter } from 'next/router';
import temp from '../images/temp.jpg'

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
                    <p>Help sponsor our team to do great things</p>
                    <form  action="/api/form" method="post">
                        <input type="text" minLength={6}  required id="email" name="email" placeholder="Email"/>
                        <button type="submit" id="submit">Submit</button>
                    </form>
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
