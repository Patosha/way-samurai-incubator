import React from "react";
import styles from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={styles.list}>
            My posts

            <div>
                <textarea></textarea>

                <button>
                    Add post
                </button>
            </div>

            <Post/>
            <Post/>

        </div>
    )
}