import React from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from '@/styles/Header.module.css';

export default function Header({ aboutMeRef, projectsRef, skillsRef }) {
  return (
    <header className={styles['header-container']}>
      <div className={styles['header-logo']}>
        <Image src="/logo.png" alt="minha logo" fill />
      </div>
      <div className={styles['header-buttons']}>
        <Button variant="variant" text="About me" targetRef={aboutMeRef} />
        <Button variant="variant" text="Projects" targetRef={projectsRef} />
        <Button variant="variant" text="Skills" targetRef={skillsRef} />
        <Button variant="variant" text="Change Theme" />
      </div>
    </header>
  );
}
