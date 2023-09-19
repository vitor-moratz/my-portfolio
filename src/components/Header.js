import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from '@/styles/Header.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function Header({ aboutMeRef, projectsRef, skillsRef, certificationsRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles['header-container']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
      <div className={styles['header-logo']}>
        <Image src="/logo.png" alt="minha logo" fill />
      </div>
      <div className={`${styles['header-buttons']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
          <Button className={`${styles['sublinhado']} ${styles['button']}`} variant="variant" text="About me" targetRef={aboutMeRef} />
          <Button className={`${styles['sublinhado']} ${styles['button']}`} variant="variant" text="Projects" targetRef={projectsRef} />
          <Button className={`${styles['sublinhado']} ${styles['button']}`} variant="variant" text="Skills" targetRef={skillsRef} />
          <Button className={`${styles['sublinhado']} ${styles['button']}`} variant="variant" text="Certifications" targetRef={certificationsRef} />
        <a className={`${styles['theme']} ${darkMode ? styles['right-mode'] : ''}`} onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </a>
      </div>
      <button className={styles['menu-button']} onClick={toggleMenu}>
        <span className={styles['menu-icon']}>&#8801;</span>
      </button>
    </header>
  );
}
