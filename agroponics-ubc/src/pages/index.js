import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Main.module.css';
import { useRouter } from 'next/router';

//Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TitleCard from '@/components/TitleCard';

// Images
import OurTeam from "../images/team/1.PNG";
import trailerBack from "../images/trailer_behind.jpg";
import temp from '../images/temp.jpg';
import Logo from '../images/logo.png';
export default function Home() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>AgroPonics UBC</title>
        <meta name='title' content='Agroponics UBC'/>
        <meta name="description" content="At Agroponics UBC, we are pioneers in the field of sustainable agriculture, leveraging cutting-edge technology to revolutionize hydroponic farming. Our mission is to create innovative, eco-friendly solutions that reduce environmental impact and optimize crop production. By integrating advanced IoT systems, real-time monitoring, and automated control, we ensure efficient resource use while producing high-yield, nutritionally rich crops.
          Our multidisciplinary team, comprising experts in engineering, environmental science, and plant biology, collaborates to design and implement state-of-the-art hydroponic systems. These systems are tailored to meet the challenges of modern agriculture, from water conservation to soil depletion. We are committed to feeding the world sustainably, one plant at a time.
          Explore our projects to learn more about how we are pushing the boundaries of agricultural technology, from autonomous hydroponic systems to innovative plant growth experiments. Join us on our journey to transform the future of farming and contribute to a healthier, more sustainable planet."
        />
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
              <h1>Sustainable Innovation for a Hungry World</h1>
              <a href='https://forms.gle/1xvmDm1rFjiyZ1GU9'>
                <button className={styles.sectionButton}>Apply Today!</button>
              </a>
            </div>            
          </div>
        </section>

        <section className={styles.info}>
          <div className={styles.infoText}>
            <h1 className={styles.sectionTitle}>ABOUT US</h1>
            <p>UBC Agroponics is an engineering design team project that designs autonomous hydroponic systems through multidisciplinary collaboration. It integrates IoT for automation, structural design for optimized environments, and experimental research on plant growth. The aim is to enhance agricultural efficiency by reducing resource use and improving crop production in a controlled, sustainable setting. We have three subteams: automation, structure, and plants.</p>
            <button onClick={() => router.push("/about")} className={styles.sectionButton}>
              Learn more
            </button>
          </div>
          <div className={styles.infoIMG}>
            <Image 
              src={OurTeam}
              alt='Some of our teammates'
              className={styles.homepageIMG}
            />
            <span>Some of our teammates</span>
          </div>            
        </section>

        <section className={styles.info}>
          <div className={styles.infoIMG}>
              <Image 
                src={trailerBack}
                alt='Back of trailer'
                className={styles.homepageIMG}
              />
              <span>The back of our trailer under construction</span>
          </div>
          <div className={styles.infoText}>
            <h1 className={styles.sectionTitle}>CURRENT PROJECTS</h1>
            <p>
              Each of our subteams are tackling various projects to put together our solution for sustainable agriculture. This includes a variety tasks like 
              programming Raspberry Pis to collect data from numerous ESP32s, completely refurnishing the trailer to house the hydroponic system, growing various plants with Deep Water Culture hydroponics, and more.
            </p>
            <button onClick={() => router.push("/projects")} className={styles.sectionButton}>
              Learn More
            </button>
          </div>
        </section>

        <section className={styles.sponsorUs}>
          <TitleCard text="SPONSOR US"/>
          <div>
            <p>
              Join us in revolutionizing sustainable agriculture by sponsoring Agroponics UBC, where your support will help students innovate in hydroponic technology.
            </p>      
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
