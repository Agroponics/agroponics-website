import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import LogoWhite from "../images/logos/AgroponicsLogoLongWhite.png";
import LogoGreen from "../images/logos/AgroponicsLogoLongGreen.png"
import Image from 'next/image';

function Navbar(props) {
  const router = useRouter();
  const [userScrolled,setNavbar] = useState(false);
  const [menuActive,toggleNavMenu] = useState(false);

  // This will look at the distance the user has scrolled to determing the 
  const changeNavBackground = () => {    
    if (window.scrollY >= 1) {
      setNavbar(true);
    }
    else {
      setNavbar(false);
    }
  }

  const openLinks = () => toggleNavMenu(true);
  const closeLinks = () => toggleNavMenu(false);

  const flashTitle = () => {   
    router.push('#contact');
    setTimeout(() => {
      let x = document.getElementById("contact");
      let ogColor = x.style.backgroundColor;
      x.style.backgroundColor = "#FDFD96";
      setTimeout(() => {
        x.style.backgroundColor = ogColor;
      }, 1500);
    }, 1  );  
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
      <nav className={(userScrolled || props.setActive) ? (styles.active) : styles.nav}>
        <a className={styles.navIcon} onClick={() => router.push('/#')}>
          <Image 
            src={(userScrolled || props.setActive) ? (LogoGreen) : LogoWhite}
            alt='Our logo'
          />
        </a>
        <div className={menuActive ? (styles.mobileMenu) : styles.linksContainer} onClick={menuActive ? (closeLinks) : null}>
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
            <span onClick={() => router.push('/sponsor')}>
              Sponsor
            </span>
            <button className={styles.volunteerButton}>
              <a onClick={() => router.push('/join')}>Join The Team</a>
            </button>
        </div>
        <div className={styles.navButton} onClick={menuActive ? (closeLinks) : openLinks}>
          <svg id='menu' xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#228b22">
            {
              menuActive ? (<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>) :
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
            }
          </svg>
        </div>
      </nav>
      {menuActive ? (<div className={styles.coverBackground} onClick={closeLinks}/>) : null}
    </> 
  );
}

export default Navbar;