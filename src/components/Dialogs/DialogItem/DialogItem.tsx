import React from "react";
import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";

type DialogItemType = {
    id: number
    name: string
    img: string
}

export const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = `/dialogs/${props.id}`

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                <img className={s.dialogAvatar} src={props.img}/>
                {props.name}
            </NavLink>
        </div>
    )
}