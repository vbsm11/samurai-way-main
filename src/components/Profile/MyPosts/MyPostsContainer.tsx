import React from 'react';
import {ActionsTypes, ProfilePageType} from '../../../redux/store';
import {addPostCreator, updateNewPostCreator} from '../../../redux/profile-reducer';
import {MyPosts} from './MyPosts';

type MyPostsPropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const addPost = () => {
        props.dispatch(addPostCreator());
        props.dispatch(updateNewPostCreator(''));
    }

    const onPostChange = (text: string) => {
        props.dispatch(updateNewPostCreator(text));
    }

    return (
        <MyPosts newPostText={props.profileState.newPostText} posts={props.profileState.posts} addPost={addPost} updateNewPostText={onPostChange}/>
    );
}