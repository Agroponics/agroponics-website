import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SponsorCard from '../components/SponsorCard';
import { useRouter } from 'next/router';

// Images
import TeamPhoto from '../images/temp.jpg';
import HydroponicsExample from '../images/temp.jpg';
import temp from '../images/temp.jpg';
import Logo from '../images/logo.png';

export default function Home() {
  const router = useRouter();
  const meta = {
    title: 'UBC Agroponics',
    description: 'A student-led UBC design team building sustainable hydroponic farming setups right on campus.',
    canonical: 'https://ubcagroponics.com/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    ``}
    }

  return (
    <>
      <DocumentMeta {...meta} />
      <Head>
        <title>Agroponics UBC</title>
        <meta name="UBC Agroponics" content="UBC's first and only hydroponics engineering design team."/>
        <link rel="icon" href={Logo}/>
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

        <section className={styles.about}>
          <h1 className={styles.sectionTitle}>ABOUT US</h1>
          <div> 
            <Image 
              src={TeamPhoto}
              alt='The Team'
              className={styles.homepageIMG}
            />
            <div>
              <p>Our team is dedicated to finding ways to improve agriculture cultivation as we know it. Currently we are converting a trailer into a fully-automated hydroponic farm.</p>
              <button onClick={() => router.push("/about")} className={styles.sectionButton}>
                Learn more
              </button>
            </div>            
          </div>
        </section>

        <section className={styles.about}>
          <h1>OUR PLAN</h1>
          <div>
            <Image 
              src={TeamPhoto}
              alt='CAD Model of our hydroponic setup in the trailer'
              className={styles.homepageIMG}
            />
            <p>Currently we are working on converting an old trailer into a hydroponic farm that will be used to grow arugula.</p>
          </div>
        </section>

        <section className={styles.sponsorUs}>
            <h1 className={styles.sectionTitle}>SPONSOR US</h1>
            <div className={styles.sponsors}>
              <SponsorCard name="Thing 1" img={temp}/>
              <SponsorCard name="Thing 2" img={temp}/>
              <SponsorCard name="Thing 3" img={temp}/>
              <SponsorCard name="Thing 4" img={temp}/>
              <SponsorCard name="Thing 5" img={temp}/>
            </div>
            <p>Donate to help us develop new technologies that support sustainable agricultural practices</p>      
            <button onClick={() => router.push("/sponsor")} className={styles.sectionButton}>
              Sponsor Our Team
            </button>
        </section>
      </main>
      <Footer/>
    </>
  );
}
