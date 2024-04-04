import React, { useEffect, useState } from 'react';
import { useRouter, useLocation } from 'next/router';
import styles from '../styles/Navbar.module.css';
import Logo from "../images/logo.png";
import Image from 'next/image';

function Navbar() {
  const router = useRouter();
  //const location = useLocation();

  const [navbar,setNavbar] = useState(false);
  
  const changeNavBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

    useEffect(()=>{
      window.addEventListener('scroll',changeNavBackground);

      return () => {
        window.removeEventListener('scroll', changeNavBackground)
      };
    }, []);

  return (
    <>
      <nav className={navbar ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/#')}>
          <Image 
            src={Logo}
            alt='Our logo'
          />
           <h2>UBC Agroponics</h2>
        </a>
        <div className={styles.linksContainer}>
            <span onClick={() => router.push('/')}>
              Home
            </span>
            <span onClick={() => router.push('/about')}>
              About Us
            </span>
            <span onClick={() => router.push('#contact')}>
              Contact Us
            </span>
            <span onClick={() => router.push('/')}>
              Sponsor Us
            </span>
            <span className={styles.volunteerButton} onClick={() => router.push('/join')}>
              Join The Team
            </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;