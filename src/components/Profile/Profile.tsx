import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://ic.pics.livejournal.com/stepbystep_hdr/11824494/1199598/1199598_original.jpg"
                     alt="обложка"/>
            </div>
            <div>
                ava + desription
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;