import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import { useRouter } from 'next/router';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TitleCard from '@/components/TitleCard';

export default function Projects() {
    return(
        <>
            <Head>
                <title>AgroPonics UBC || Projects</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel="icon" href="https://ubcagroponics.com/favicon.ico"/>
            </Head>
            <Navbar />
            <main>
                <div className={styles.projectLanding}>
                    <div>
                        <h1>Check Out Our Projects</h1>
                        <h4>See what each of our subteams are doing</h4>
                    </div>
                </div>
                <section className={styles.subteams}>
                    <div className={styles.automation}>
                        
                    </div>
                    <div className={styles.plants}>

                    </div>
                    <div className={styles.structure}>

                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );

};