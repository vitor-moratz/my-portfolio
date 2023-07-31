import Head from 'next/head';
import Image from 'next/image';
import { Saira } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const saira = Saira({ subsets: ['latin'] });

export default function Home() {
  const icons = {
    Robot: '/robot.png',
    BDD: '/tecnicabdd.png',
    CSS: '/css.png',
    PlayWright: '/play.png',
    Git: '/git.png',
    JS: '/js.png',
    K6: '/k6.png',
    HTML: '/html5.png',
    React: '/react.png',
  };

  return (
    <>
      <Head>
        <title>Mortaz Porfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favFontAwesomeIconicon.ico' />
      </Head>

      <div className={styles['apresentation-container']}>
        <div className={styles['apresentation-text']}>
          <h1>{"I'm Vitor"}</h1>
          <h3>QA | Front-end Developer</h3>
        </div>
        <div className={styles['apresentation-image']}>
          <Image src='/moratz.png' alt='Meu avatar' fill />
        </div>
      </div>
      <div className={styles['about-container']}>
        <u>
          <h1>About Me</h1>
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

          <div className={styles['about-skills']}>
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
              <div className={styles["contact-logos"]}>
                <FontAwesomeIcon icon={['fab', 'twitter']} />
                <FontAwesomeIcon icon={['fab', 'instagram']} />
                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                <FontAwesomeIcon icon={['fab', 'github']} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['projects-container']}>
        <h1>Projects</h1>
        <div className={styles['projects-links']}>
          <div className={styles['projects-icons']} />
          <div className={styles['projects-icons']} />
          <div className={styles['projects-icons']} />
        </div>
        <div className={styles['see-more']}>
          <Button text='See more' />
        </div>
      </div>
      <div className={styles['skills-container']}>
        <h1>Skills</h1>
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
