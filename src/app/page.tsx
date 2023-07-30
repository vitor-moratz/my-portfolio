import Image from 'next/image';
import './globals.css';

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
          <button>Home</button>
          <button>About me</button>
          <button>Projects</button>
          <button>Skills</button>
          <button>Dark & Right</button>
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
    </div>
  );
}