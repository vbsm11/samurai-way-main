import {addPostCreator, profileReducer, updateNewPostCreator} from './profile-reducer';
import {addMessageCreator, dialogsReducer, updateNewMessageCreator} from './dialogs-reducer';
import {sidebarReducer} from './sidebar-reducer';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type MessageType = {
    id: number
    text: string
    isMy: boolean
    img: string
}

export type DialogType = {
    id: number
    name: string
    img: string
}

export type NavFriendType = {
    id: number
    name: string
    img: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageText: string
}

export type SidebarType = {
    navFriends: Array<NavFriendType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostCreator>
    | ReturnType<typeof addMessageCreator>
    | ReturnType<typeof updateNewPostCreator>
    | ReturnType<typeof updateNewMessageCreator>;

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It\'s my first post', likesCount: 6},
                {id: 3, message: 'Blabla', likesCount: 7},
                {id: 4, message: 'Dada', likesCount: 8}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
        sidebar: {
            navFriends: [
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
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber();
    }
}