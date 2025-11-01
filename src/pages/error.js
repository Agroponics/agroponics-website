/*
    The website's Error Page

    To be used as a placeholder whenever a page is being updated

    Featured on https://ubcagroponics.com/error


    Created by Edan Steen
    Last Modified November 1st 2025
*/

import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Error.module.css";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";

export default function Error() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Page Unavailable</title>
            </Head>
            <Navbar setActive={true}/>
            <main>
                <div className={styles.closed} id="closed">
                    <div>
                        <span>Sorry, this page is currently unavailable as we're still updating our site. Come back later!</span>
                        <button onClick={() => router.push('/')}>&lt; Return to Home</button>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    );
}
