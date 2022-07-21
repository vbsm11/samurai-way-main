import React from 'react';

import {ActionsTypes, DialogsPageType} from '../../redux/store';
import {addMessageCreator, updateNewMessageCreator} from '../../redux/dialogs-reducer'
import {Dialogs} from './Dialogs';

type DialogsPropsType = {
    dialogsState: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}


export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const updateNewMessage = (text: string) => {
        props.dispatch(updateNewMessageCreator(text))
    }

    const forwardMessage = () => {
        props.dispatch(addMessageCreator());
        props.dispatch(updateNewMessageCreator(''))
    }

    return (
        <Dialogs dialogsState={props.dialogsState} forwardMessage={forwardMessage} updateNewMessage={updateNewMessage}/>
    )
}