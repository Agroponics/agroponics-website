import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import styles from "../styles/Main.module.css";
import { useRouter } from 'next/router';

export default function Join() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>AgroPonics UBC || Join</title>
                <meta name="UBC Agroonics | Join" content="Join our team"/>
            </Head>
            <Navbar />
            <main>
                <div className={styles.closed} id="closed">
                    <div>
                        <span>Sorry. We are currently not taking any applications.</span>
                        <button onClick={() => router.push('/')}>&lt; Return to Home</button>
                    </div>
                </div>
            </main>
        </>
    );
}
