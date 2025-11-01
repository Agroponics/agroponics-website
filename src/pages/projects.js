/*
    The website's About Page

    Features all the project posts.

    Featured on https://ubcagroponics.com/projects

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Projects.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// Get data for the posts
import { getSortedPostsData } from '../utils/posts.js';

export default function Projects({allPostsData}) {
    return(
        <>
            <Head>
                <title>Agroponics UBC || Projects</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel="icon" href="https://ubcagroponics.com/favicon.ico"/>
            </Head>
            <Navbar />
            <main>
                <div className={styles.projectLanding}>
                    <div>
                        <h1>Check Out Our Projects</h1>
                        <h2>See what each of our subteams are doing</h2>
                    </div>
                </div>
                
                <div className={styles.blurb}>
                    <p>
                        We’re excited to share a glimpse of the projects we’re currently working on. Our team is always exploring new ideas and developing innovative solutions, be sure to check back often for the latest updates and additions!
                    </p>
                </div>

                <section className={styles.subteams}>
                    <div className={styles.automation}>
                        <h2>AUTOMATION</h2>
                        <ul className={styles.subteamArticles}>
                            {allPostsData.map(({ id, cover_image, title, subteam }) => (
                            (subteam === "automation") ?
                            <li className={styles.suggestedArticle} key={id}>
                                <Link href={`/projects/${id}`}>
                                    <img src={`/projectIMGs/${cover_image}`}/>
                                    <br/>
                                    {title}
                                </Link>
                            </li> : null
                            ))}
                        </ul>                        
                    </div>

                    <div className={styles.plants}>
                        <h2>PLANTS</h2>
                        <ul className={styles.subteamArticles}>
                            {allPostsData.map(({ id, cover_image, title, subteam }) => (
                            (subteam === "plants") ?
                            <li className={styles.suggestedArticle} key={id}>
                                <Link href={`/projects/${id}`}>
                                    <img src={`/projectIMGs/${cover_image}`}/>
                                    <br/>
                                    {title}
                                </Link>
                            </li> : null
                            ))}
                        </ul>
                    </div>
                    
                    <div className={styles.structure}>
                        <h2>STRUCTURE</h2>
                        <ul className={styles.subteamArticles}>
                            {allPostsData.map(({ id, cover_image, title, subteam }) => (
                            (subteam === "structure") ?
                            <li className={styles.suggestedArticle} key={id}>
                                <Link href={`/projects/${id}`}>
                                    <img src={`/projectIMGs/${cover_image}`}/>
                                    <br/>
                                    {title}
                                </Link>
                            </li> : null
                            ))}
                        </ul>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};
  
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}