import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.footerCols}>
          <div className={styles.contact}>
                <h4 id='contactTitle'>Contact Us</h4> 
                <span>
                  <a href='https://maps.app.goo.gl/kUk9z4Coq3y4jNap7' target='_blank'>2613 West Mall,<br/>Vancouver, BC, V6T 1Z2</a>
                </span>
                <span>
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
                <span>
                  <a href='https://ca.linkedin.com/company/ubcagrobot' target='_blank' rel='noreferrer'>LinkedIn</a>
                </span>
          </div>
          <div>
                <h4>Quick Links</h4>
                <span>
                  <a onClick={() => router.push('/join')}>Join</a>
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
        </div>
        <span onClick={() => router.push('/dog')} className={styles.copyright}>©2025 Agroponics UBC</span>
      </footer>
      
    </>
  );
}

export default Footer;
