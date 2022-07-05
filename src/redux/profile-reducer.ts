import {ActionsTypes, PostType, ProfilePageType} from './state';

export const addPostCreator = () => ({type: 'ADD-POST'}) as const

export const updateNewPostCreator = (newText: string) => ({
    type: 'UPDATE-NEW-POST-TEXT',
    newText: newText
}) as const

export const profileReducer = (state: ProfilePageType, action: ActionsTypes): ProfilePageType => {
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