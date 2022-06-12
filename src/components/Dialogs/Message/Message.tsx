import React from "react";
import s from "./../Dialogs.module.css";

type MessagePropsType = {
    text: string
    isMy: boolean
    img: string
}

export const Message: React.FC<MessagePropsType> = (props) => {
    return props.isMy?
        <div className={`${s.message} ${s.outgoing}`}>
            <img className={s.dialogAvatar} src={props.img}/>{props.text}
        </div> :
        <div className={`${s.message} ${s.incoming}`}>
            {props.text}<img className={s.dialogAvatar} src={props.img}/>
        </div>
}