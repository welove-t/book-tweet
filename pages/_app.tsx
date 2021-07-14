import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import BottomNavi from '../components/all/BottomNavi';
import Footer from '../components/lp/Footer';
import UserProvider from '../context/userContext';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <UserProvider>
      <Component {...pageProps} />
      <BottomNavi />
      <Footer />
    </UserProvider>
  );
};

export default MyApp;
