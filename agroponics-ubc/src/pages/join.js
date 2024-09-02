import Image from "next/image";
import Navbar from "@/components/Navbar";
import styles from "../styles/Main.module.css";
import Footer from "@/components/Footer";

//Images
import timeline from "../images/recruitment_timeline.jpg";

export default function Join() {
    return(
        <>
            <Navbar/>
            <div className={styles.joinLanding}>
                <div>
                    <h1>Join Our Team</h1>
                </div>
            </div>
            <div className={styles.joinInfo}>
                <Image src={timeline} alt="Timeline of recruitment process. Applications close Sept 21."/>  
                <div>
                    <p>Applications close on September 21st!</p>
                    <a>Link to application form</a>
                </div>
            </div>
            <Footer />
        </>
    );
}