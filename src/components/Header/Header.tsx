import React from "react";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.logo}
                 src="https://cdn.pixabay.com/photo/2020/12/05/06/45/flag-5805228__340.png"
                 alt="logo"
            />
        </header>
    )
}