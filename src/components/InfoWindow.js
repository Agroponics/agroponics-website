import styles from "../styles/About.module.css";

export default function InfoWindow(props) {
    return (
        <div className={styles.blockBackground}>
            <div className={styles.infoWindow}>
                <button><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#fefefe"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
                <div className={styles.information}>
                    <h3>{props.title}</h3>
                    <p>{props.text}</p>
                </div>
                <div className={styles.images}>
                    <Image src={props.img0}/>
                    <Image src={props.img1}/>
                    <Image src={props.img2}/>
                </div>
            </div>
        </div>
    );
}
