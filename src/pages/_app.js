import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import { Saira } from 'next/font/google';
const saira = Saira({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main className={`${saira.className}`}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
