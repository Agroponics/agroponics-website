import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import Logo from "../images/logo.png";
import Image from 'next/image';

function Navbar() {
  const router = useRouter();
  var linksHidden = false;
  const [navbar,setNavbar] = useState(false);


  /*
  * This will look at the distance the user has scrolled to determing the 
  */
  const changeNavBackground = () => {    
    if (window.scrollY >= 1) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

    /*
    * This is used to trigger the add a shadow under the navbar after it scrolls down a certain distance
    */
    useEffect(()=>{
      window.addEventListener('scroll',changeNavBackground);

      return () => {
        window.removeEventListener('scroll', changeNavBackground)
      };
    }, []);

    // check if button is pressed
    function toggleLinks() {
        if (linksHidden) {
          
        }
        
        else {
         
        }           
        
        linksHidden = !linksHidden;
    }

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
        <div className={styles.linksContainer} id='links'>
            <span onClick={() => router.push('/')}>
              Home
            </span>
            <span onClick={() => router.push('/about')}>
              About Us
            </span>
            <span onClick={() => router.push('#contact')}>
              Contact Us
            </span>
            <span onClick={() => router.push('/sponsor')}>
              Sponsor Us
            </span>
            <span className={styles.volunteerButton} onClick={() => router.push('/join')}>
              Join The Team
            </span>
        </div>
        <div className={styles.navButton} id='navButton' onClick={toggleLinks()}>
          X
        </div>
      </nav>
    </>
  );
}

export default Navbar;