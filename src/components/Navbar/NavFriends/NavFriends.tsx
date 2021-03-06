import React from 'react';
import s from './../Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavFriendType} from "../../../redux/store";

type NavFriendsPropsType = {
    friends: Array<NavFriendType>
}

export const NavFriends:React.FC<NavFriendsPropsType> = (props) => {

    let navFriends = props.friends
        .map(f => <div key={f.id} className={s.friend}>
            <div className={s.friendName}>{f.name}</div>
            <div><img className={s.friendAvatar} src={f.img}/></div>
        </div>)

    return (
        <div className={`${s.item} ${s.friends}`}>
            <NavLink to="/friends" activeClassName={s.active}>Friends</NavLink><br/>
            {navFriends}
        </div>
    );
}