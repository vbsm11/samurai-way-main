import {ActionsTypes, PostType, ProfilePageType} from './store';

export const addPostCreator = () => ({type: 'ADD-POST'}) as const

export const updateNewPostCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
}) as const

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 6},
        {id: 3, message: 'Blabla', likesCount: 7},
        {id: 4, message: 'Dada', likesCount: 8}
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}