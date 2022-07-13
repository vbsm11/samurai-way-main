import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';
import {ActionsTypes, PostType} from '../../../redux/store';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profile-reducer';

type MyPostsPropsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts
        .map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)


    const addPost = () => {
        props.dispatch(addPostCreator());
        props.dispatch(updateNewPostCreator(''));
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostCreator(e.currentTarget.value));
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        onChange={onPostChange}
                        value={props.newPostText}
                        placeholder={'Whats new?'}
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