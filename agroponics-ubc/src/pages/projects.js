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
            <main>
                <div className={styles.projectLanding}>
                    <h1>Check Out Our Projects</h1>
                    <h4>See what each of our subteams are doing</h4>
                </div>
                <div className={styles.automation}>

                </div>
                <div className={styles.plants}>

                </div>
                <div className={styles.structure}>

                </div>
            </main>
            <Footer/>
        </>
    );

};