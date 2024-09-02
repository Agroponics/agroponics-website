import Head from 'next/head';
import styles from '../styles/Projects.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import ProjectCard from "../components/ProjectCard.js"

//Images
import RaspberryPi from "../images/projectIMGs/raspberryPi.jpg";
import ESP32 from "../images/temp.jpg";
import paint from "../images/projectIMGs/painting.jpg";
import radishes from "../images/projectIMGs/radishes.jpg";
import insulation from "../images/projectIMGs/insulation.jpg";

export default function Projects() {

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
                        Here are a few of the projects we're working on. We're constantly working on new things and will be adding more projects so feel free to come back later :)
                    </p>
                </div>

                <section className={styles.subteams}>
                    <div className={styles.automation}>
                        <h2>AUTOMATION</h2>
                        <div>
                            <ProjectCard text="Raspberry Pi Network Setup" img={RaspberryPi}/>
                            <ProjectCard text="ESP32 Sensor Integration" img={ESP32}/>
                        </div>                        
                    </div>
                    <div className={styles.plants}>
                        <h2>PLANTS</h2>
                        <div>
                            <ProjectCard text="Radishes" img={radishes}/>
                            
                        </div>
                    </div>
                    <div className={styles.structure}>
                        <h2>STRUCTURE</h2>
                        <div>
                            <ProjectCard text="Painting The Trailer" img={paint}/>
                            <ProjectCard text="Insulation" img={insulation}/>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );

};