/*
    The website's 404 Error Page

    Appears when users attempt to go to a page that doesn't exist, i.e. https://ubcagroponics.com/guineapigs

    Created by Edan Steen
    Last Modified November 1st 2025
*/

import styles from "../styles/Error.module.css";
import { useRouter} from 'next/router';

export default function Custom404() {
    const router = useRouter();
    return (<>
      <main className={styles.closed}>
        <div>
          <h1>404 - Page Not Found :(</h1> 
            <button onClick={() => router.push('/')}>&lt; Return to Home</button>
        </div>
      </main>
    </>
    );
}