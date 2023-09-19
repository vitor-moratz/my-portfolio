import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Saira } from 'next/font/google';
const saira = Saira({ subsets: ['latin'] });

export default function Footer() {
    return (
        <footer className={`${styles["footer-container"]} ${saira.className}`}>
            <div className={styles["copyright-message"]}>
            © 2023 Moratz. All rights reserved
            </div>
            <div className={styles["privacity-policy"]}>
                <Link href="/">Privacity Policy</Link>
            </div>
            <div className={styles["footer-logo"]}>
                <Image src="/logo.png" alt="minha logo" fill/>
            </div>
        </footer>
    )
}