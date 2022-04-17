import React from "react";
import styles from './Post.module.css';

export const Post = () => {
    return (
        <div>
            <img className={styles.avatar}
                 src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                 alt="photo"
            />
            post 1
            <span className={styles.like}>
                like
            </span>
        </div>
    )
}