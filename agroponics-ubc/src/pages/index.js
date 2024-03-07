import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SponsorCard from '../components/SponsorCard';
import Logo from '../images/logo.png';
import TeamPhoto from '../images/temp.jpg';
import temp from '../images/temp.jpg';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Agroponics UBC</title>
        <meta name="description" content="UBC Agroponics "/>
        <link rel="icon" href={Logo}/>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.landing}>
          <div>
            <Image 
                  src={Logo}
                  alt='Our logo'
            />
            <div>
              <h1>Be a part of the action</h1>
              <button className={styles.sectionButton} onClick={() => router.push('/join')}>Join Our Team</button>
            </div>            
          </div>
        </div>
          
        <div className={styles.about}>
          <h1 className={styles.sectionTitle}>About Us</h1>
          <div> 
            <Image 
              src={TeamPhoto}
              alt='The Team'
              className='homepageIMG'
            />
            <p>Our team is dedicated to finding ways to improve agriculture cultivation as we know it. We are currently working to convert </p>
          </div>
        </div>
        <div className={styles.sponsorUs}>
            <h1 className={styles.sectionTitle}>Our Sponsors</h1>
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
        </div>
      </main>
      <Footer/>
    </>
  );
}
