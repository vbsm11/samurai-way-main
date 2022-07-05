import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsTypes, PostType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts
        .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({
            type: 'UPDATE-NEW-POST-TEXT',
            newText: e.currentTarget.value
        });
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                    ></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}