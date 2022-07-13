import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostType, ProfilePageType} from '../../redux/store';

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile:React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profileState.posts}
                newPostText={props.profileState.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    );
}
