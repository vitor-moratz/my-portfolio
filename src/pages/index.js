import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp, FaArrowCircleUp } from 'react-icons/fa';

export default function Home({ aboutMeRef, projectsRef, skillsRef, certificationsRef }) {

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
  /*
  Português
  const skillContent = {
    Robot: "Robot Framework é uma estrutura de automação de código aberto que facilita a criação e execução de testes automatizados e automação de processos. É amplamente utilizado para testes de aceitação e automação de tarefas em uma variedade de domínios, incluindo desenvolvimento de software, testes de software, automação de interface do usuário, testes de aplicativos web e muito mais.",
    BDD: "Behavior-Driven Development (BDD), ou Desenvolvimento Orientado ao Comportamento, é uma abordagem de desenvolvimento de software que se concentra em compreender e especificar o comportamento esperado de um sistema a partir da perspectiva do usuário. O BDD é uma extensão do Test-Driven Development (TDD) que coloca maior ênfase na linguagem natural e na colaboração entre desenvolvedores, testadores e partes interessadas (stakeholders) do projeto.",
    CSS: "Cascading Style Sheets (CSS), que em português significa Folhas de Estilo em Cascata, é uma linguagem de marcação amplamente utilizada na criação e estilização de páginas da web. O CSS desempenha um papel crucial na apresentação visual e no layout de um site, permitindo que os desenvolvedores controlem a aparência e o posicionamento de elementos HTML em uma página.",
    PlayWright: "Playwright é uma estrutura de automação de testes e navegação para desenvolvedores e testadores de software. Desenvolvida pela Microsoft, ela permite a automação de interações com navegadores da web, como Chrome, Firefox, e WebKit (Safari), de forma eficiente e consistente. O Playwright é conhecido por sua capacidade de oferecer suporte multi-navegador com uma única API, o que o torna uma escolha poderosa para automação de testes e tarefas de navegação na web.",
    Git: "Git é um sistema de controle de versão distribuído amplamente utilizado para o rastreamento de mudanças no código-fonte durante o desenvolvimento de software. Criado por Linus Torvalds em 2005, o Git se tornou uma das ferramentas mais essenciais para desenvolvedores, facilitando o trabalho colaborativo, o gerenciamento de código e o controle de versão de projetos de software.",
    JS: "JavaScript (JS) é uma linguagem de programação amplamente utilizada para desenvolver aplicativos web interativos. Ela desempenha um papel crucial na criação de recursos dinâmicos e interativos em sites, adicionando comportamento e funcionalidade aos elementos HTML e CSS. Criada originalmente pela Netscape em 1995, o JavaScript se tornou uma das linguagens de programação mais populares e é suportada pela maioria dos navegadores da web.",
    K6: "K6 é uma ferramenta de teste de carga de código aberto projetada para avaliar o desempenho e a escalabilidade de aplicativos e serviços web. Desenvolvida pela Load Impact, a K6 oferece uma abordagem moderna e programável para simular tráfego em escala e testar como um sistema se comporta sob carga.",
    HTML: "HTML (Hypertext Markup Language), em português Linguagem de Marcação de Hipertexto, é a espinha dorsal da World Wide Web. É uma linguagem de marcação utilizada para criar e estruturar o conteúdo de páginas da web. Criada por Tim Berners-Lee no início dos anos 90, o HTML é a linguagem fundamental para a criação de documentos da web, e desempenhou um papel essencial na revolução da informação e da comunicação que caracteriza a internet moderna.",
    React: "React é uma biblioteca JavaScript de código aberto amplamente utilizada para criar interfaces de usuário (UI) interativas e componentes reutilizáveis para aplicativos web e móveis. Desenvolvida e mantida pelo Facebook, o React se tornou uma das ferramentas mais populares e influentes para o desenvolvimento front-end.",
  };
 */

  /*Aqui abaixo está em inglês*/
  const skillContent = {
    Robot: "Robot Framework is an open source automation framework that facilitates the creation and execution of automated tests and process automation. It is widely used for acceptance testing and task automation in a variety of domains, including software development, testing software, UI automation, web application testing, and more.",
    BDD: "Behavior-Driven Development (BDD) is a software development approach that focuses on understanding and specifying the expected behavior of a system from the user's perspective. BDD is an extension of Test-Driven Development (TDD) that places greater emphasis on natural language and collaboration between developers, testers and project stakeholders.",
    CSS: "Cascading Style Sheets (CSS), which in Portuguese means Cascading Style Sheets, is a markup language widely used in creating and styling web pages. CSS plays a crucial role in the visual presentation and layout of a web page. website, allowing developers to control the appearance and positioning of HTML elements on a page.",
    PlayWright: "Playwright is a test and navigation automation framework for software developers and testers. Developed by Microsoft, it enables the automation of interactions with web browsers, such as Chrome, Firefox, and WebKit (Safari), efficiently and consistent. Playwright is known for its ability to offer multi-browser support with a single API, which makes it a powerful choice for test automation and web browsing tasks.",
    Git: "Git is a distributed version control system widely used for tracking changes to source code during software development. Created by Linus Torvalds in 2005, Git has become one of the most essential tools for developers, facilitating collaborative work, code management and version control of software projects.",
    JS: "JavaScript (JS) is a programming language widely used for developing interactive web applications. It plays a crucial role in creating dynamic and interactive features on websites by adding behavior and functionality to HTML and CSS elements. Originally created by Netscape in 1995, JavaScript became one of the most popular programming languages and is supported by most web browsers.",
    K6: "K6 is an open source load testing tool designed to evaluate the performance and scalability of web applications and services. Developed by Load Impact, K6 offers a modern, programmable approach to simulating traffic at scale and testing as a system behaves under load.",
    HTML: "HTML (Hypertext Markup Language), in Portuguese Hypertext Markup Language, is the backbone of the World Wide Web. It is a markup language used to create and structure the content of web pages. Created by Tim Berners-Lee In the early 1990s, HTML is the fundamental language for creating web documents, and it played an essential role in the information and communication revolution that characterizes the modern internet.",
    React: "React is an open-source JavaScript library widely used for creating interactive user interfaces (UI) and reusable components for web and mobile applications. Developed and maintained by Facebook, React has become one of the most popular and influential tools for front-end development.",
  };

  const [expanded, setExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const openSkillModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillModal = () => {
    setSelectedSkill(null);
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
          <h1 id='home' className={styles['hometitulo1']}>{"I'm Vitor"}</h1>
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
        <a className={styles['go-top']} href="#">
          <FaArrowCircleUp />
        </a>
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
          <div className={styles['projects-icons']}></div>
          <div className={styles['projects-icons']}></div>
          <div className={styles['projects-icons']}></div>
        </div>
        <div className={styles['see-more']}>
          {!expanded && (
            <button
              id='see-more-button'
              className={`see-more-button ${styles['centered-button']}`}
              onClick={toggleExpansion}
            >
              See more
            </button>
          )}
          {expanded && (
            <div className={styles['expanded-content']}>
              <div className={styles['projects-links']}>
                <div className={styles['projects-icons']}></div>
                <div className={styles['projects-icons']}></div>
                <div className={styles['projects-icons']}></div>
              </div>
            </div>
          )}
          {expanded && (
            <button
              className={`see-less-button ${styles['centered-button']}`}
              onClick={toggleExpansion}
            >
              See less
            </button>
          )}
        </div>
      </div>
      <div className={styles['skills-container']} ref={skillsRef}>
        <u>
          <h1 id='skills'>Skills</h1>
        </u>
        <div className={styles['skills-logos']}>
          {Object.keys(icons).map((icon) => (
            <div
              key={icon}
              className={`${styles['skills-icons']} ${selectedSkill ? 'modal-open' : ''}`}
              onClick={() => openSkillModal(icon)}
            >
              <Image src={icons[icon]} alt={icon} key={icon} fill />
            </div>
          ))}
        </div>
      </div>
      {selectedSkill && (
        <div className={`${styles['modal-container']}`} onClick={closeSkillModal}>
          <div className={styles['modal-content']} onClick={(e) => e.stopPropagation()}>
            <h1 className='description'>Description</h1>
            <p>{skillContent[selectedSkill]}</p>
            <button className={styles['button-close']} onClick={closeSkillModal}>Close</button>
          </div>
        </div>
      )}
      <div className={styles['certifications-container']} ref={certificationsRef}>
        <u>
        <h1 id='certifications'>Certifications</h1>
        </u>
        <div className={styles['certifications-links']}>
          <div className={styles['certifications-icons']}></div>
          <div className={styles['certifications-icons']}></div>
          <div className={styles['certifications-icons']}></div>
        </div>
        <div className={styles['see-more']}>
          {!expanded && (
            <button
              id='see-more-button'
              className={`see-more-button ${styles['centered-button']}`}
              onClick={toggleExpansion}
            >
              See more
            </button>
          )}
          {expanded && (
            <div className={styles['expanded-content']}>
              <div className={styles['certifications-links']}>
                <div className={styles['certifications-icons']}></div>
                <div className={styles['certifications-icons']}></div>
                <div className={styles['certifications-icons']}></div>
              </div>
            </div>
          )}
          {expanded && (
            <button
              className={`see-less-button ${styles['centered-button']}`}
              onClick={toggleExpansion}
            >
              See less
            </button>
          )}
        </div>
      </div>
    </>
  );
}