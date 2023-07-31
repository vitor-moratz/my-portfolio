import Image from "next/image";
import Button from "./Button";
import styles from '@/styles/Header.module.css'

export default function Header() {
    return (
        <header className={styles["header-container"]}>
            <div className={styles["header-logo"]}>
                <Image src="/logo.png" alt="minha logo" fill/>
            </div>
            <div className={styles["header-buttons"]}>
                <Button text={'Home'}/>
                <Button text={'About me'}/>
                <Button text={'Projects'}/>
                <Button text={'Skills'}/>
                <Button text={'Change Theme'}/>
            </div>
        </header>
    )
}