/*
    The website's Join Page

    Featured on https://ubcagroponics.com/join

    Currently not featured on the website

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import { useRouter} from 'next/router';
import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "../styles/Main.module.css";
import closed_styles from "../styles/Error.module.css";
import Footer from "@/components/Footer";

export default function Join() {
    const router = useRouter();
    
    return(
        <>
            <Navbar setActive={true}/>
            <main className={styles.joinMain}>
                <div className={styles.joinLanding}>
                    <div>
                        <h1>Join Our Team</h1>
                    </div>
                </div>
                <div className={styles.joinInfo}>
                    <Image alt="Timeline of recruitment process. Applications close Sept 21."/>  
                    <div>
                        <p>Applications close on September 21st!</p>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfTsSp2DBLQ9jJ0jRU6AFzYBqIYsVRzayUlXa3zDIgrEtlQJQ/formResponse' target='_blank'>Link to application form</a>
                    </div>
                </div>
            </main>
            
            <div className={closed_styles.closed} id="closed">
                <div>
                    <span>Sorry, we are not currently taking applications. Contact us if you have any questions!</span>
                    <button onClick={() => router.push('/')}>&lt; Return to Home</button>
                </div>
            </div>
    
            <Footer />
        </>
    );
}