import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Footer.module.css';

function Footer() {
  const router = useRouter();

  return (
    <>
      <footer className={styles.footer} id="footer">
        <div>
            <h4>Quick Links</h4>
            <span onClick={() => router.push('/invasivePlants')}>
              <a>Invasive Plants</a>
            </span>
            <span onClick={() => router.push('/about')}>
              <a>About Us</a>
            </span>
            <span onClick={() => router.push('/volunteer')}>
              <a>Volunteer</a>
            </span>
            <span>
              <a href="https://www2.gov.bc.ca/gov/content/environment/plants-animals-ecosystems/invasive-species/reporting-invasive-species" target="_blank" rel="noreferrer">
                Report An Invasive
              </a>
            </span>
        </div>
        <div>
          <h4>Volunteer Links</h4>
            <span>
              <a href="https://pacificspiritparksociety.org/programs/stewardship/" target="_blank" rel="noreferrer">PSPS EcoTeam</a>
            </span>
            <span>
              <a href="http://jerichostewardship.ca/volunteer/" target="_blank" rel="noreferrer">Jericho Stewardship Group</a>
            </span>
        </div>
        <div className={styles.contact} id="contact">
            <h4 id='contactTitle'>Contact Us</h4>
            <span>
              2250 Eddington Drive<br/>
              Vancouver, BC, V6L 2E7
            </span>
            <span>
                778-895-1717
            </span>
            <span>
              <a href="mailto:noahbaron91@gmail.com" rel="noreferrer">noahbaron91@gmail.com</a>
            </span>
        </div>
      </footer>
      <span className={styles.copyright}>©2022 Invasive Plants PW</span>
    </>
  );
}

export default Footer;
