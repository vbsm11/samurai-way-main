import {ActionsTypes, DialogsPageType, MessageType} from './store';

export const addMessageCreator = () => ({type: 'ADD-MESSAGE'}) as const;

export const updateNewMessageCreator = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
}) as const

let initialState: DialogsPageType = {
    dialogs: [
        {
            id: 1,
            name: 'Quincy',
            img: 'https://static.spartak.com/m/3f28/b2b5/5df1/7aa2/d7ff/7685/bb8b/0c35/1280_1280_max.png'
        },
        {
            id: 2,
            name: 'Georgiy',
            img: 'https://static.spartak.com/m/025a/1c1a/2edd/e7b6/a169/e021/9764/bdd7/1280_1280_max.png'
        },
        {
            id: 3,
            name: 'Roman',
            img: 'https://static.spartak.com/m/3275/d28e/6c97/ede0/dedb/5365/7e75/0507/1280_1280_max.png'
        },
        {
            id: 4,
            name: 'Victor',
            img: 'https://static.spartak.com/m/4a9e/dbcd/ac74/bdbf/c310/5e88/3e5c/9057/1280_1280_max.png'
        },
    ],
    messages: [
        {
            id: 1,
            text: 'Hi. How are you?',
            isMy: true,
            img: 'https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg'
        },
        {
            id: 2,
            text: 'Hi. Good, and you?',
            isMy: false,
            img: 'https://static.spartak.com/m/3f28/b2b5/5df1/7aa2/d7ff/7685/bb8b/0c35/1280_1280_max.png'
        },
        {
            id: 3,
            text: 'I am OK. Bye',
            isMy: true,
            img: 'https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg'
        },
        {
            id: 4,
            text: 'Goodbye',
            isMy: false,
            img: 'https://static.spartak.com/m/3f28/b2b5/5df1/7aa2/d7ff/7685/bb8b/0c35/1280_1280_max.png'
        }
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes): DialogsPageType => {
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