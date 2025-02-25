import Image from 'next/image';
import styles from '../styles/Sponsor.module.css';

function SponsorCard(props) {
    return (
        <>
            <div className={styles.sponsorCard}>
                <Image
                    src={props.img}
                    alt={props.name}
                />
                <span>{props.name}</span> 
            </div>
        </>
      );
}

export default SponsorCard;