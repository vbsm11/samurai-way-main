import {ActionsTypes, DialogsPageType, MessageType} from './state';

export const addMessageCreator = () => ({type: 'ADD-MESSAGE'}) as const;

export const updateNewMessageCreator = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
}) as const

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessageType = {
                id: state.messages.length + 1,
                isMy: true,
                img: 'https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg',
                text: state.newMessageText
            }
            state.messages.push(newMessage);
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}