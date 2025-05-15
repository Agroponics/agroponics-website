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
                                <li>agroponicsubc@gmail.com</li>
                            </a>
                            <a href="https://github.com/Agroponics" target='_blank'>
                                <svg width="98" height="96" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#24292f"/></svg>
                                <li>GitHub</li>
                            </a>
                            <a href="https://www.linkedin.com/company/ubcagrobot/posts/?feedView=all">
                                <img src={linkedinLogo} className={styles.followIcon}/>
                                <li>LinkedIn</li>
                            </a>
                            <a href="https://www.instagram.com/ubcagroponics/">
                                <img src={instaLogo} className={styles.followIcon}/>
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