import 'bootstrap/dist/css/bootstrap.min.css'
// import '../app/globals.css';
import type { AppProps } from 'next/app'
import Providers from "../app/Provider";
import Navbar from '../components/Navbar';

export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Providers>
      <Navbar /> {/* Navbar appears on all Page Router pages */}
      <Component {...pageProps} />
    </Providers>
  );
}
