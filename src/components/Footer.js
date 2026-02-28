/*
    The website's Footer component, featured at the bottom of each page.

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.footerCols}>
          <div className={styles.contact}>
                <h4 id='contactTitle'>Contact Us</h4> 
                <span>
                  <a href='https://maps.app.goo.gl/2oyc3JVw7DnZKstd6' target='_blank'>University of British Columbia<br/>Vancouver, BC</a>
                </span>
                <span>
                  <a href="mailto:ubcagrobot@gmail.com" rel="noreferrer">ubcagrobot@gmail.com </a>
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
        <span onClick={() => router.push('/dog')} className={styles.copyright}>©{currentYear} Agroponics UBC</span>
      </footer>
      
    </>
  );
}

export default Footer;
