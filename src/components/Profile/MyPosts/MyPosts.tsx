import React from 'react';
import s from './MyPosts.module.css';
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post id={1} message="Hi, how are you?" likesCount={5} />
                <Post id={2} message="It's my first post" likesCount={6}/>
            </div>
        </div>
    );
}