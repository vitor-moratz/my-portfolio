import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <div className='container-oficial'>
      <header className="header">
        <Image className='cabecalho'
          src="/cabecalho.png"
          alt="fundo da logo"
          width={280}
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
      </header>
    <div className='container-home'>
      <main className="main">
        <div className="text-container">
          <h1>I'm Vitor</h1>
          <h2>QA | Front-end developer</h2>
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
      </main>
      </div>
      <div className='container-about'>
          <h1>About me</h1>  
          <div className='foto'></div>
          <div className='about'></div>
          <div className='idiomas'></div>
          <div className='formacoes'></div>
          <div className='contato'></div>
      </div>
    </div>
  );
}
