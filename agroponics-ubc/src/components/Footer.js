import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer} id="contact">
      <div className={styles.contact}>
            <h4 id='contactTitle'>Contact Us</h4>
            <span>
              2345 E Mall,<br/>
              V6T 1Z4, Vancouver, BC, Canada
            </span>
            <span>
              <a href="mailto:agroponicsubc@gmail.com" rel="noreferrer">agroponicsubc@gmail.com</a>
            </span>
        </div>
        <div>
          <h4>Follow Us</h4>
            <span>
              <a href="" target="_blank" rel="noreferrer">GitHub</a>
            </span>
            <span>
              <a href="" target="_blank" rel="noreferrer">Instagram</a>
            </span>
        </div>
        <div>
            <h4>Quick Links</h4>
            <span onClick={() => router.push('/join')}>
              <a>Join Us</a>
            </span>
            <span onClick={() => router.push('/about')}>
              <a>About Us</a>
            </span>
            <span onClick={() => router.push('/sponsor')}>
              <a>Sponsor Us</a>
            </span>
        </div>
      </footer>
      <span className={styles.copyright}>©2024 Agroponics UBC</span>
    </>
  );
}

export default Footer;
