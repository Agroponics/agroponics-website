// pages/404.js
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