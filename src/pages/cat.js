import React from "react";
import Head from "next/head";
import styles from "../styles/Error.module.css";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";

export default function Cat() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>CAT</title>
            </Head>
            <main>
                <div className={styles.dog}>
                    <h1>Cat has found you</h1>
                    <img src={`/cat.jpg`}></img>
                    <button className={styles.goHome}>
                        <a onClick={() => router.push('/')}>Click to return home</a>
                    </button>
                </div>
                <Footer />
            </main>
        </>
    );
}
