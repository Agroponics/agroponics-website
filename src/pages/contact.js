/*
    The website's Contact Page

    Featured on https://ubcagroponics.com/contact

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import Head from 'next/head';
import styles from '../styles/Contact.module.css';

//Components
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

//logo imports
import emailLogo from '../images/social_media_icons/email.svg'
import githubLogo from '../images/social_media_icons/github-mark.svg';
import instaLogo from '../images/social_media_icons/instagram_icon.svg';
import linkedinLogo from '../images/social_media_icons/linkedin_icon.svg';

import Image from "next/image";

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
                            <a href="mailto:ubcagrobot@gmail.com">
                                <Image height={24} width={25} src={emailLogo} className={styles.followIcon}/>
                                <li>ubcagrobot@gmail.com</li>
                            </a>
                            <a href="https://github.com/Agroponics" target='_blank'>
                                <Image height={24} width={25} src={githubLogo} className={styles.followIcon}/>
                                <li>GitHub</li>
                            </a>
                            <a href="https://www.linkedin.com/company/ubcagrobot/posts/?feedView=all" target='_blank'>
                                <Image height={24} width={24} src={linkedinLogo} className={styles.followIcon}/>
                                <li>LinkedIn</li>
                            </a>
                            <a href="https://www.instagram.com/ubcagroponics/" target='_blank'>
                                <Image height={24} width={24} src={instaLogo} className={styles.followIcon}/>
                                <li>Instagram</li>
                            </a>
                        </ul>
                    </div>
        
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1157.8998822100107!2d-123.24923302704174!3d49.259236386376045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548672cc2fd41e03%3A0xc79dd4e7732aa2f3!2sThe%20University%20of%20British%20Columbia!5e0!3m2!1sen!2sca!4v1760812358729!5m2!1sen!2sca" 
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