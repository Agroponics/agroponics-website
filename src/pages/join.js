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

            <div className={closed_styles.closed} id="closed">
                <div>
                    <span>Sorry, we are not currently taking applications. <br/>
                        Contact us at <a href='mailto:agroponicsubc@gmail.com'>agroponicsubc@gmail.com</a> if you have any questions!</span>
                    <button onClick={() => router.push('/')}>&lt; Return to Home</button>
                </div>
            </div>
    
            <Footer />
        </>
    );
}