import React from 'react';
import styles from '@/styles/Button.module.css';
import { Saira } from 'next/font/google';
const saira = Saira({ subsets: ['latin'] });

export default function Button({ variant, text, targetRef }) {
  const className = `${styles[variant]} ${styles.button} ${saira.className}`;

  const handleClick = () => {
    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <button className={className} onClick={handleClick}>
      {text}
    </button>
  );
}
