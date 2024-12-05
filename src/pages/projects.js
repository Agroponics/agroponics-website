import Head from 'next/head';
import styles from '../styles/Projects.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

// Get data for the posts
import { getAllPostIds, getSortedPostsData } from '../utils/posts.js';

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
                        <div>
                            
                        </div>                        
                    </div>
                    <div className={styles.plants}>
                        <h2>PLANTS</h2>
                        <div>
                           
                        </div>
                    </div>
                    <div className={styles.structure}>
                        <h2>STRUCTURE</h2>
                        <div>
                            
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
};

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
      paths,
      fallback: false,
    };
}
  
export async function getStaticProps({ params }) {
    const allPostsData = getSortedPostsData();
  
    return {
        props: {
            allPostsData,
        },
    };
}