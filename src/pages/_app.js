//The base page we use to define each of our other pages
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
  );
}

export default MyApp
