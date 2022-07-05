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
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof addMessageActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof updateNewMessageActionCreator>;

export const addPostActionCreator = () => ({type: 'ADD-POST'}) as const

export const updateNewPostActionCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
}) as const

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'}) as const;

export const updateNewMessageActionCreator = (newText: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: newText
}) as const


export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 5},
                {id: 2, message: 'It\'s my first post', likesCount: 6},
                {id: 3, message: 'Blabla', likesCount: 7},
                {id: 4, message: 'Dada', likesCount: 8}
            ],
            newPostText: 'it-kamasutra.com'
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

    addPost() {
        let newPost: PostType = {
            id: this._state.profilePage.posts.length + 1,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this.updateNewPostText('')
        this._callSubscriber();
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber()
    },
    addMessage() {
        let newMessage: MessageType = {
            id: this._state.dialogsPage.messages.length + 1,
            isMy: true,
            img: 'https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg',
            text: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost: PostType = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this.updateNewPostText('')
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber()
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessageType = {
                id: this._state.dialogsPage.messages.length + 1,
                isMy: true,
                img: 'https://img.championat.com/s/735x490/news/big/r/t/gilermo-abaskal-vozglavil-spartak_16548517192029530367.jpg',
                text: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber();
        }
    }
}