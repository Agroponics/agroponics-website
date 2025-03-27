import Head from 'next/head';
import styles from '../styles/Contact.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

//logo imports
import githubLogo from '../images/social_media_icons/github-mark.svg';
import instaLogo from '../images/social_media_icons/instagram_icon.svg';
import linkedinLogo from '../images/social_media_icons/linkedin_icon.svg';

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
                        <h1>Contact Us</h1>
                        <p>We'd love to here from you! Send us an email if have any questions or would like to get in touch.</p>

                        <ul>
                            <a href="mailto:agroponicsubc@gmail.com">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/></svg>
                                <li>Email</li>
                            </a>
                            <a href="https://github.com/Agroponics" target='_blank'>
                                <span className={styles.followIcon}><img src={githubLogo}/></span>
                                <li>GitHub</li>
                            </a>
                            <a href="https://www.linkedin.com/company/ubcagrobot/posts/?feedView=all">
                                <span className={styles.followIcon}><img src={linkedinLogo}/></span>
                                <li>LinkedIn</li>
                            </a>
                            <a href="https://www.instagram.com/ubcagroponics/">
                            <span className={styles.followIcon}><img src={instaLogo}/></span>
                                <li>Instagram</li>
                            </a>
                        </ul>
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