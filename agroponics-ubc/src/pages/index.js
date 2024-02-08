import Head from 'next/head';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/logo.png'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Agroponics UBC</title>
        <meta name="description" content="UBC Agroponics "/>
        <link rel="icon" href={logo}/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.landing}>
          <div>
            <h3 className={styles.sectionTitle}>Help Save Our Native Ecosystems</h3>
            <div className={styles.landinglogo}/>
            <button className={styles.sectionButton} onClick={() => router.push('/join')}>Join Our Team</button>
          </div>
        </div>
          
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>we do plants!</p>
        </div>
        <div className={styles.sponsorUs}>
            <h3>Sponsor Us</h3>
            <p>Donate to help us develop promote sustainable agricultural practices</p>      
            <button onClick={() => router.push("/sponsor")} className={styles.sectionButton}>
              See List
            </button>
        </div>
        <div className={styles.quote}>
          <q>When one tugs at a single thing in nature, he finds it attached to the rest of the world.</q>
          <span>-John Muir</span>
        </div>
      </main>
      <Footer/>
    </>
  );
}
