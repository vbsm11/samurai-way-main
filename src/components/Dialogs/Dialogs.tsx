import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType, DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsState:DialogsPageType
}

export const Dialogs:React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsState.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>);


    let messagesElements = props.dialogsState.messages
        .map(m => <Message text={m.text} img={m.img} isMy={m.isMy}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}