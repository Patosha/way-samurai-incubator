import React from "react";
import styles from './Post.module.css';

type PostTypeProps = {
    message: string
    likesCount: string
}

export const Post = (props: PostTypeProps) => {
    return (
        <div>
            <img className={styles.avatar}
                 src="https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
                 alt="photo"
            />
            {props.message}

            <span className={styles.like}>
                like
                {props.likesCount}
            </span>
        </div>
    )
}