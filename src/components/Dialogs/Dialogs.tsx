import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Dialogs.module.css";

type DialogItemType = {
    id: number
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

type MessageType = {
    text: string;
}

const Message:React.FC<MessageType> = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    )
}


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={"Kolya"}/>
                <DialogItem id={2} name={"Tolya"}/>
                <DialogItem id={3} name={"Sanya"}/>
                <DialogItem id={4} name={"Vanya"}/>
            </div>
            <div className={s.messages}>
                <Message text={"Hi"} />
                <Message text={"How are you?"} />
                <Message text={"Yo"} />
            </div>
        </div>
    )
}