import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function Home({ aboutMeRef, projectsRef, skillsRef }) {

  const icons = {
    Robot: '/robot.png',
    BDD: '/tecnicabdd.png',
    CSS: '/css.png',
    PlayWright: '/play.png',
    Git: '/git.png',
    JS: '/js.png',
    K6: '/k6.png',
    HTML: '/html5.png',
    React: '/react2.png',
  };

  return (
    <>
      <Head>
        <title>Moratz Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favFontAwesomeIconicon.ico' />
      </Head>

      <div className={styles['apresentation-container']} ref={aboutMeRef}>
        <div className={styles['apresentation-text']}>
          <h1 id='home' className={styles['hometitulo1']}>I'm Vitor</h1>
          <h3 className={styles['hometitulo2']}>QA | Front-end Developer</h3>
        </div>
        <div className={styles['apresentation-image']}>
          <Image src='/moratz.png' alt='Meu avatar' fill />
        </div>
      </div>
      <div className={styles['about-container']} ref={aboutMeRef}>
        <u>
          <h1 id='aboutme'>About Me</h1>
        </u>
        <div className={styles['about-details-container']}>
          <div className={styles['about-details']}>
            <div className={styles['about-foto']}>
              <Image src='/eu.png' alt='Minha foto' fill />
            </div>
            <div className={styles['about-text']}>
              <p>
                My name is Vitor Morato de Lima and I currently work in the
                Quality Assurance role, however I am studying and developing my
                skills with this project to reach a significant level. So I
                invite you to my journey.
                <br />
                <br />
                The purpose of this project is to allow me to chronologically
                store developments with programming languages to include them in
                my portfolio, attaching all my experiences.
              </p>
            </div>
          </div>

          <div className={styles['about-skills']} >
            <div className={styles['language-skills']}>
              <u>
                <h2>Languages</h2>
              </u>
              <span>PT-BR | Native Speaker</span>
              <span>EN | Basic</span>
            </div>
            <div className={styles['education-skills']}>
              <u>
                <h2>Education</h2>
              </u>
              <span>Analysis and systems development - UNINTER</span>
            </div>
            <div className={styles['contact-me']}>
              <u>
                <h2>Contact Me</h2>
              </u>
              <div className={styles['redirect']}>
                <a className={styles['redirect']} href="https://api.whatsapp.com/send?phone=5541998595330&text=Welcome%20Moratz%20Programming!" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                </a>
                <a className={styles['redirect']} href="https://www.instagram.com/vitor.morato_smile/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
                </a>
                <a className={styles['redirect']} href="https://www.linkedin.com/in/vitor-moratz-b24629152/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                </a>
                <a className={styles['redirect']} href="https://github.com/VitorMoratoz" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['projects-container']} ref={projectsRef}>
        <u>
        <h1 id='projects'>Projects</h1>
        </u>
        <div className={styles['projects-links']}>
          <div className={styles['projects-icons']} />
          <div className={styles['projects-icons']} />
          <div className={styles['projects-icons']} />
        </div>
        <div className={styles['see-more']}>
          <Button text='See more' />
        </div>
      </div>
      <div className={styles['skills-container']} ref={skillsRef}>
        <u>
        <h1 id='skills'>Skills</h1>
        </u>
        <div className={styles['skills-logos']}>
          {Object.keys(icons).map((icon) => (
            <div key={icon} className={styles['skills-icons']}>
              <Image src={icons[icon]} alt={icon} key={icon} fill />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
