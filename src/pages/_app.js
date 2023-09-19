import Footer from '@/components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';
import { Saira } from 'next/font/google';
import { useRef } from 'react';
const saira = Saira({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);

  return (
    <>
      <Header
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        skillsRef={skillsRef}
        certificationsRef={certificationsRef}
      />
      <main className={`${saira.className}`}>
        <Component {...pageProps}
          homeRef={homeRef}
          aboutMeRef={aboutMeRef}
          projectsRef={projectsRef}
          skillsRef={skillsRef}
          certificationsRef={certificationsRef} />
      </main>
      <Footer />
    </>
  );
}
