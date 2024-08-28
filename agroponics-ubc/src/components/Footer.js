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
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M480-276q109-83 164.5-169.5T700-600q0-97-61.5-158.5T480-820q-97 0-158.5 61.5T260-600q0 67 55.5 153.5T480-276Zm0 76Q338-303 269-406t-69-194q0-123 78.5-201.5T480-880q123 0 201.5 78.5T760-600q0 91-69 194T480-200Zm-1-320q34 0 57.5-23.5T560-600q0-33-23.5-56.5T479-680q-33 0-56 23.5T400-600q0 33 23 56.5t56 23.5ZM200-80v-60h560v60H200Zm280-520Z"/></svg>
              <a href='https://maps.app.goo.gl/6H68TqspcrcNMRzp7' target='_blank'>2345 E Mall,<br/>V6T 1Z4, Vancouver, BC, Canada</a>
            </span>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
              <a href="mailto:agroponicsubc@gmail.com" rel="noreferrer">agroponicsubc@gmail.com </a>
            </span>
        </div>
        <div>
          <h4>Follow Us</h4>
            <span>
              <a href="https://github.com/Agroponics" target="_blank" rel="noreferrer">GitHub</a>
            </span>
            <span>
              <a href="https://www.instagram.com/ubcagroponics/" target="_blank" rel="noreferrer">Instagram</a>
            </span>
        </div>
        <div>
            <h4>Quick Links</h4>
            <span>
              <a href='https://forms.gle/1xvmDm1rFjiyZ1GU9' target='_blank'>Join</a>
            </span>
            <span onClick={() => router.push('/about')}>
              <a>About</a>
            </span>
            <span onClick={() => router.push('/projects')}>
              <a>Projects</a>
            </span>
            <span onClick={() => router.push('/sponsor')}>
              <a>Sponsor</a>
            </span>
        </div>
      </footer>
      <span className={styles.copyright}>©2024 Agroponics UBC</span>
    </>
  );
}

export default Footer;
