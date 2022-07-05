import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {ActionsTypes, DialogsPageType} from '../../redux/state';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'

type DialogsPropsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let dialogsElements = props.dialogsState.dialogs
        .map(d => <DialogItem id={d.id} name={d.name} img={d.img}/>);


    let messagesElements = props.dialogsState.messages
        .map(m => <Message key={m.id} text={m.text} img={m.img} isMy={m.isMy}/>)

    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewMessageCreator(e.currentTarget.value))
    }

    const forwardMessage = () => {
        props.dispatch(addMessageCreator());
        props.dispatch(updateNewMessageCreator(''))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea
                        placeholder={'Enter your message'}
                        value={props.dialogsState.newMessageText}
                        onChange={onMessageChange}
                    ></textarea>
                </div>
                <div>
                    <button onClick={forwardMessage}>Forward</button>
                </div>
            </div>

        </div>
    )
}