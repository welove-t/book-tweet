import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import Footer from '../components/lp/Footer';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
