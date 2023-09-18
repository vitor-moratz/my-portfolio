import React, { useState } from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from '@/styles/Header.module.css';

export default function Header({ aboutMeRef, projectsRef, skillsRef }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles['header-container']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
      <div className={styles['header-logo']}>
        <Image src="/logo.png" alt="minha logo" fill />
      </div>
      <div className={`${styles['header-buttons']} ${isMenuOpen ? styles['menu-open'] : ''}`}>
        <Button variant="variant" text="About me" targetRef={aboutMeRef} />
        <Button variant="variant" text="Projects" targetRef={projectsRef} />
        <Button variant="variant" text="Skills" targetRef={skillsRef} />
        <Button variant="variant" text="Change Theme" />
      </div>
      <button className={styles['menu-button']} onClick={toggleMenu}>
        <span className={styles['menu-icon']}>&#8801;</span>
      </button>
    </header>
  );
}
