import React from 'react';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profileState: ProfilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile:React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.profileState.posts}
                addPost={props.addPost}
                newPostText={props.profileState.newPostText}
                updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}
