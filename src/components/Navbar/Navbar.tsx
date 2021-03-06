import React from "react";
import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>

                <li className={styles.item}>
                    <a className={`${styles.link} ${styles.active}`} href="/">
                        Profile
                    </a>
                </li>

                <li className={styles.item}>
                    <a className={styles.link} href="/">
                        Messages
                    </a>
                </li>

                <li className={styles.item}>
                    <a className={styles.link} href="/">
                        News
                    </a>
                </li>

                <li className={styles.item}>
                    <a className={styles.link} href="/">
                        Music
                    </a>
                </li>

                <li className={styles.item}>
                    <a className={styles.link} href="/">
                        Settings
                    </a>
                </li>
            </ul>
        </nav>
    )
}