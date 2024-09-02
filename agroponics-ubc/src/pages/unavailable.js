import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Error.module.css";
import { useRouter } from 'next/router';

export default function Unavailable() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Page Unavailable On Mobile</title>
            </Head>
            <Navbar />
            <main>
                <div className={styles.closed} id="closed">
                    <div>
                        <span>Sorry, this page is currently unavailable on mobile as we're still updating our site. Try visiting with a desktop comptuer!</span>
                        <button onClick={() => router.push('/')}>&lt; Return to Home</button>
                    </div>
                </div>
            </main>
        </>
    );
}
