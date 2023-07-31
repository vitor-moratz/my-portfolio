import styles from '@/styles/Button.module.css';
import { Saira } from 'next/font/google';
const saira = Saira({ subsets: ['latin'] });

export default function Button({variant, text}) {

    const className = `${styles.variant} ${styles.button} ${saira.className}`
    return (
        <button className={className}>{text}</button>
    )
}