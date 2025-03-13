import Head from 'next/head';
import styles from '../styles/Contact.module.css';

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
                <section className={styles.heading}>
                    <div>
                        <span>Contact Us</span>
                    </div>
                </section>
                <div className={styles.contact}>
                    <div>
                        <h1>Reach Out!</h1>
                        <form className={styles.form}>
                            <input type='text' maxLength={40} placeholder='Enter email'></input>
                            <input type='text' maxLength={100} placeholder='Subject'></input>
                            <input type='text' maxLength={400} placeholder='Type Message Here'></input>
                            <input type='button' value="Send"/>
                        </form>
                    </div>

                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.0699760966277!2d-123.2515708241771!3d49.256119572635704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672ccdf168d99%3A0xbc28e4b98109133e!2sAgroponics%20UBC!5e0!3m2!1sen!2sca!4v1741834868244!5m2!1sen!2sca" 
                        className={styles.map} 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>

            </main>
            <Footer/>
        </>
    );

};