import Image from 'next/image';
import styles from '../styles/Sponsor.module.css';

function SponsorCard(props) {
    return (
        <>
            <a href={props.link} target='_blank'>
                <div className={styles.sponsorCard}>
                    <Image
                        src={props.img}
                        alt={props.name}
                    />
                    <span>{props.name}</span> 
                </div>
            </a>
        </>
      );
}

export default SponsorCard;