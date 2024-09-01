import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import Logo from "../images/logo.png";
import Image from 'next/image';

function Navbar() {
  const router = useRouter();
  var linksHidden = true;
  const [userScrolled,setNavbar] = useState(false);
  const [menuActive,toggleNavMenu] = useState(false);

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

  const toggleLinks = () => {
    if (linksHidden) {
      toggleNavMenu(true);
    }
    else {
      toggleNavMenu(false);
    }

    linksHidden = !linksHidden;
  }

  const flashTitle = () => {
    let delay = 800;    
    router.push('#contact');
    setTimeout(() => {
      let x = document.getElementById("contact");
      let ogColor = x.style.backgroundColor;
      x.style.backgroundColor = "#FDFD96";
      setTimeout(() => {
        x.style.backgroundColor = ogColor;
      }, delay);
    }, 1000);  
  }     

    /*
    * This is used to trigger the add a shadow under the navbar after it scrolls down a certain distance
    */
    useEffect(()=>{
      window.addEventListener('scroll',changeNavBackground);
      
      return () => {
        window.removeEventListener('scroll', changeNavBackground);
      };
    }, []);

  return (
    <>
      <nav className={userScrolled ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/#')}>
          <Image 
            src={Logo}
            alt='Our logo'
          />
          <h2>UBC Agroponics</h2>
        </a>
        <div className={menuActive ? (styles.mobileMenu) : styles.linksContainer} onClick={menuActive ? (toggleLinks) : null}>
            <span onClick={() => router.push('/')}>
              Home
            </span>
            <span onClick={() => router.push('/about')}>
              About
              <div className={styles.dropdown}>
                <ul>
                  <li>Automation</li>
                  <li>Plants</li>
                  <li>Structure</li>
                </ul>
              </div>
            </span>
            <span onClick={() => router.push('/projects')}>
              Projects
            </span>
            <span onClick={flashTitle}>
              Contact
            </span>
            <span onClick={() => router.push('/error')}>
              Sponsor
            </span>
            <button className={styles.volunteerButton}>
              <a href='https://forms.gle/1xvmDm1rFjiyZ1GU9'>Join The Team</a>
            </button>
        </div>
        <div className={styles.navButton} onClick={toggleLinks}>
          <svg id='menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#228b22">
            {
              menuActive ? (<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>) :
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            }
          </svg>
        </div>
      </nav>
      {menuActive ? (<div className={styles.coverBackground} onClick={toggleLinks}/>) : null}
    </> 
  );
}

export default Navbar;