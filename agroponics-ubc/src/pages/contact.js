import Head from 'next/head';
import styles from '../styles/Sponsor.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

export default function Contact() {

    return(
        <>
            <Head>
                <title>Agroponics UBC || Contact</title>
                <meta charSet='utf-8'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel="icon" href="https://ubcagroponics.com/favicon.ico"/>
            </Head>
            <Navbar />
            <main>
                <div className={styles.contact}>
                    <div>
                        <h1>Reach Out!</h1>
                        <form>
                            <input type='text' maxLength={40} placeholder='Enter email'></input>
                            <input type='text' maxLength={100} placeholder='Subject'></input>
                            <input type='text' maxLength={400} placeholder='Type Message Here'></input>
                            <input type='button' value="Send"/>
                        </form>
                    </div>
                </div>

            </main>
            <Footer/>
        </>
    );

};