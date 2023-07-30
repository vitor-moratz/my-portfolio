import Image from 'next/image';
import './globals.css';
<link href="https://fonts.googleapis.com/css2?family=Saira:wght@100;200;300;400;500&display=swap.css"/>

export default function Portfolio() {
  return (
    <div className='header'>
        <Image className='cabecalho'
          src="/cabecalho.png"
          alt="fundo da logo"
          width={270}
          height={75}
          priority
        />
        <Image className='logo'
          src="/logo.png"
          alt="logo"
          width={320}
          height={65}
          priority
        />
        <div className="button-container">
          <button className='button1'>Home</button>
          <button className='button2'>About me</button>
          <button className='button3'>Projects</button>
          <button className='button4'>Skills</button>
          <button className='button5'>Dark & Right</button>
        </div>
      
      <div className='container-home'>
          <div className="text-container">
            <h1 className='name'>I'm Vitor</h1>
            <h2 className='function'>QA | Front-end developer</h2>
          </div>
          <div className="image-group">
            <Image className='personagem'
              src="/moratz.png"
              alt="personagem"
              width={490}
              height={505}
              priority
            />
            <Image className='fundo-personagem'
              src="/fundo-avatar.png"
              alt="fundo do avatar"
              width={500}
              height={500}
              priority
            />
          </div>
      </div>
      
      <div className='container-about'>
        <h1 className='titulo1'>About me</h1>
        <Image className='eu'
              src="/eu.png"
              alt="eu"
              width={320}
              height={320}
              priority
            />
        <Image className='eu2'
              src="/eu2.png"
              alt="fundo de mim"
              width={360}
              height={360}
              priority
            />
        <h6 className='text1'>My name is Vitor Morato de Lima and I currently work in the Quality Assurance role, however I am studying and developing my skills with this project to reach a significant level. So I invite you to my journey.</h6>
        <h6 className='text2'>The purpose of this project is to allow me to chronologically store developments with programming languages to include them in my portfolio, attaching all my experiences.</h6>
        <div className='idiomas'>
          <h2>Languages</h2>
          <Image className='retan1'
              src="/retan1.png"
              alt="retan1"
              width={33}
              height={28}
              priority
            />
          <Image className='retan2'
              src="/retan2.png"
              alt="retan2"
              width={33}
              height={28}
              priority
            />
            <Image className='line1'
              src="/line1.png"
              alt="line1"
              width={169}
              height={5}
              priority
            />
            <Image className='us'
              src="/us.png"
              alt="us"
              width={26}
              height={26}
              priority
            />
            <Image className='br'
              src="/br.png"
              alt="br"
              width={26}
              height={26}
              priority
            />
            <h2 className='idien'>EN | Basic</h2>
            <h2 className='idibr'>PT-BR | Native Speaker</h2>
        </div>
        <div className='formacoes'>
        <h2>Education</h2>
        <Image className='retan3'
              src="/retan3.png"
              alt="retan3"
              width={33}
              height={28}
              priority
            />
            <Image className='line2'
              src="/line2.png"
              alt="line2"
              width={154}
              height={5}
              priority
            />
            <Image className='form'
              src="/form.png"
              alt="form"
              width={24}
              height={20}
              priority
            />
            <h2 className='eduform'>Analysis and systems development - UNINTER</h2>
        </div>
        <div className='contato'>
          <h2>Contact me</h2>
          <Image className='circ1'
              src="/circ1.png"
              alt="circ1"
              width={45}
              height={45}
              priority
            />
            <Image className='line3'
              src="/line3.png"
              alt="line3"
              width={177}
              height={5}
              priority
            />
            <Image className='insta'
              src="insta.svg"
              alt="insta"
              width={25}
              height={25}
              priority
            />
          <Image className='circ1'
              src="/circ1.png"
              alt="circ1"
              width={45}
              height={45}
              priority
            />
            <Image className='linkedin'
              src="linkedin.svg"
              alt="linkedin"
              width={25}
              height={25}
              priority
            />
          <Image className='circ2'
              src="/circ1.png"
              alt="circ1"
              width={45}
              height={45}
              priority
            />
            <Image className='github'
              src="github.svg"
              alt="github"
              width={25}
              height={25}
              priority
            />
          <Image className='circ3'
              src="/circ1.png"
              alt="circ1"
              width={45}
              height={45}
              priority
            />
            <Image className='twitter'
              src="twitter.svg"
              alt="twitter"
              width={25}
              height={25}
              priority
            />
            <Image className='circ4'
              src="/circ4.png"
              alt="circ4"
              width={45}
              height={45}
              priority
            />
        </div>
      </div>

      <div className='container-projects'>
      <h1 className='titulo1'>Projects</h1>
      <Image className='eclipseprojects'
              src="/eclipseprojects.png"
              alt="eclipseprojects"
              width={380}
              height={360}
              priority
            />
      <Image className='projects2'
              src="/viewmore.png"
              alt="projects2"
              width={226}
              height={48}
              priority
            />
      <Image className='faixa'
              src="/faixa.png"
              alt="faixa"
              width={200}
              height={330}
              priority
            />
      <Image className='eclipseprojects2'
              src="/eclipseprojects2.png"
              alt="eclipseprojects"
              width={380}
              height={360}
              priority
            />
      <Image className='faixa2'
              src="/faixa2.png"
              alt="faixa2"
              width={200}
              height={330}
              priority
            />
      <Image className='eclipseprojects3'
              src="/eclipseprojects3.png"
              alt="eclipseprojects3"
              width={380}
              height={360}
              priority
            />
      <Image className='faixa3'
              src="/faixa3.png"
              alt="faixa3"
              width={200}
              height={330}
              priority
            />
      <h3 className='textsoon'>Soon News</h3>
      <h3 className='textsoon2'>Soon News</h3>
      <h3 className='textsoon3'>Soon News</h3>
      <h5 className='viewmore'>View More</h5>
      </div>

      <div className='container-skills'>
      <h1 className='titulo4'>Skills</h1>
      <Image className='cuadrado1'
              src="/cuadrado1.png"
              alt="cuadrado1"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado2'
              src="/cuadrado2.png"
              alt="cuadrado2"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado3'
              src="/cuadrado3.png"
              alt="cuadrado3"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado4'
              src="/cuadrado4.png"
              alt="cuadrado4"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado5'
              src="/cuadrado5.png"
              alt="cuadrado5"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado6'
              src="/cuadrado6.png"
              alt="cuadrado6"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado7'
              src="/cuadrado7.png"
              alt="cuadrado7"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado8'
              src="/cuadrado8.png"
              alt="cuadrado8"
              width={140}
              height={140}
              priority
            />
      <Image className='cuadrado9'
              src="/cuadrado9.png"
              alt="cuadrado9"
              width={140}
              height={140}
              priority
            />
      <Image className='robot'
              src="/robot.png"
              alt="robotframework"
              width={140}
              height={140}
              priority
            />
      <Image className='play'
              src="/play.png"
              alt="playwright"
              width={100}
              height={90}
              priority
            />
      <Image className='k6'
              src="/k6.png"
              alt="k6-performance"
              width={90}
              height={90}
              priority
            />
      <Image className='git'
              src="/git.png"
              alt="git"
              width={100}
              height={100}
              priority
            />
      <Image className='react'
              src="/react2.png"
              alt="robotframework"
              width={110}
              height={90}
              priority
            />
      <Image className='js'
              src="/js.png"
              alt="js"
              width={200}
              height={105}
              priority
            />
      <Image className='css'
              src="/css.png"
              alt="css3"
              width={110}
              height={105}
              priority
            />
      <Image className='html'
              src="/html5.png"
              alt="html5"
              width={130}
              height={130}
              priority
            />
      <Image className='bdd'
              src="/tecnicabdd.png"
              alt="bdd"
              width={125}
              height={125}
              priority
            />
      <h2 className='textskills'>/* Mouse over a skill to read the description */</h2>
        </div>
    <div className='footer'>
        <Image className='rodape'
          src="/rodape.png"
          alt="fundo da logo rodape"
          width={270}
          height={75}
          priority
        />
        <Image className='logo2'
          src="/logo2.png"
          alt="logo2"
          width={320}
          height={65}
          priority
        />
      <h6 className='copyright'>© 2023 Moratz. All rights reserved</h6>
      <h6 className='privacity'>Privacity Policy</h6>
        </div>
    </div>
  );
}