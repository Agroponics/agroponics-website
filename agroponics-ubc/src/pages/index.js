import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Home || Invasive Plants PW</title>
        <meta name="description" content="Informing PW of invasive plants in our local community."/>
        <link rel="icon" href="favicon.png"/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.volunteer}>
          <img src="/sign1.jpg"/>
          <div>
            <h3 className={styles.sectionTitle}>Help Save Our Native Ecosystems</h3>
            <p>Invasive species are non-native organisms that can cause economic and environmental harm. There are over 450 different invasive species in Canada which causes 7.5 billion dollars in lost revenue for the agriculture and forestry industry annually. <br/>
            Invasive species are an important issue we need to address in our society, and we can&apos;t do it without you.</p>
            <br/><button className={styles.sectionButton} onClick={() => router.push('/volunteer')}>Get Involved</button>
          </div>
        </div>
        <div className={styles.video}>
          <div className={styles.vidDesc}>
              <h3 className={styles.sectionTitle}>Learn About the Issue</h3>
              <p>This short 3 minute video we made will give you a sense of the scope of the harm cause 
                by invasive species everyday and get the basic knowledge you need to start helping restore
                our native ecosystems.
              </p>
          </div>
        </div>
        <div className={styles.commonSpecies} id='invasivePlants'>
            <h3>Common Invasive Species In Vancouver</h3>
            <p>See our list of common invasive plant species in our city.</p>      
            <button onClick={() => router.push("/invasivePlants")} className={styles.sectionButton}>
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
