// pages/_app.js
import { Toaster } from 'react-hot-toast';


function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-black'>
      <Component {...pageProps} />
      <Toaster />
    </div>
  );
}

export default MyApp;
