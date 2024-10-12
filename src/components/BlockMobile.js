import styles from "../styles/Error.module.css";

export default function BlockMobile() {
    return (
        <div className={styles.blockmobile}>
            <div>
                <span>Sorry, this page is currently unavailable as we're still updating our site. Come back later!</span>
                <button onClick={() => router.push('/')}>&lt; Return to Home</button>
            </div>
        </div>
    );
}