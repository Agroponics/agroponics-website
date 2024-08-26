import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import { useRouter } from 'next/router';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TitleCard from '@/components/TitleCard';

// Images
import TeamPhoto from '../images/temp.jpg';
import HydroponicsExample from '../images/temp.jpg';
import temp from '../images/temp.jpg';
import Logo from '../images/logo.png';
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>AgroPonics UBC</title>
        <meta name='title' content='Agroponics UBC'/>
        <meta name="description" content="UBC's first hydroponics engineering design team."/>
        <meta charSet='utf-8'/>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
        <link rel="icon" href="https://ubcagroponics.com/favicon.ico"/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.landing}>
          <div>
            <Image 
                  src={Logo}
                  alt='Our logo'
            />
            <div>
              <h1>Help us make the future greener</h1>
              <button className={styles.sectionButton} onClick={() => router.push('/join')}>Join Our Team</button>
            </div>            
          </div>
        </section>

        <section className={styles.info}>
          <div>
            <h1 className={styles.sectionTitle}>ABOUT US</h1>
            <p>Our team is dedicated to finding ways to improve agriculture cultivation as we know it. Currently we are converting a trailer into a fully-automated hydroponic farm.</p>
            <button onClick={() => router.push("/about")} className={styles.sectionButton}>
              Learn more
            </button>
          </div>    
          <Image 
            src={TeamPhoto}
            alt='The Team'
            className={styles.homepageIMG}
          />        
        </section>

        <section className={styles.info}>
          <Image 
              src={TeamPhoto}
              alt='CAD Model of our hydroponic setup in the trailer'
              className={styles.homepageIMG}
            />
          <div>
            <h1 className={styles.sectionTitle}>OUR PLAN</h1>
            <p>Currently we are working on converting an old trailer into a hydroponic farm that will be used to grow arugula.</p>
            <button onClick={() => router.push("/join")} className={styles.sectionButton}>
              Get Involved
            </button>
          </div>
        </section>

        <section className={styles.sponsorUs}>
          <TitleCard 
            text="SPONSOR US"
            img={temp}
          />
          <div>
            <p>Donate to help us develop new technologies that support sustainable agricultural practices</p>      
            <button onClick={() => router.push("/sponsor")} className={styles.sectionButton}>
              Sponsor Our Team
            </button>
          </div>
          
        </section>
      </main>
      <Footer/>
    </>
  );
}
