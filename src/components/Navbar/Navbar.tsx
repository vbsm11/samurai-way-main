import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {NavFriends} from "./NavFriends/NavFriends";
import {NavFriendType, SidebarType} from "../../redux/store";

type NavbarPropsType = {
    navbarState: SidebarType
}

export const Navbar:React.FC<NavbarPropsType> = (props) => {
    return (
        <nav className={s.nav}>
            <div className = {s.item}>
                <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className = {`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to="/news" activeClassName={s.active}>News</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
            </div>
            <div className = {s.item}>
                <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
            </div>
            <NavFriends friends={props.navbarState.navFriends}/>
        </nav>
    );
}
