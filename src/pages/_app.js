import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import { Saira } from 'next/font/google';
const saira = Saira({ subsets: ['latin'] });
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCoffee)

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
