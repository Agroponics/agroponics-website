import Navbar from '@/components/Navbar';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps}>
    <Navbar/>
  </Component>
  );
}

export default MyApp
