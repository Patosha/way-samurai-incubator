import React from "react";
import styles from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={styles.content}>

            <img className={styles.img}
                 src="https://funart.pro/uploads/posts/2021-03/1617066508_28-p-oboi-kartinki-na-zastavku-kompyutera-30.jpg"
                 alt="landscape"
            />

            <div>
                ava + description
            </div>

            <MyPosts/>

        </div>
    )
}