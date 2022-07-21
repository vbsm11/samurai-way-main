import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from '../../redux/store';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';

type ProfilePropsType = {
    profileState: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}


export const Profile:React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                profileState={props.profileState}
                dispatch={props.dispatch}
            />
        </div>
    );
}
