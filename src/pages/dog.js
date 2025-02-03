import React from "react";
import Head from "next/head";
import styles from "../styles/Error.module.css";
import Image from "next/image";
import { useRouter } from 'next/router';
import Footer from "@/components/Footer";

export default function Dog() {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>DOG</title>
            </Head>
            <main>
                <div className={styles.dog}>
                    <h1>Dog has found you</h1>
                    <Image src={`/dog.jpg`} width={800} height={600}></Image>
                    <button className={styles.goHome}>
                        <a onClick={() => router.push('/')}>Click to return home</a>
                    </button>
                </div>
                <Footer />
            </main>
        </>
    );
}
