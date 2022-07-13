import {ActionsTypes, SidebarType} from './store';

let initialState: SidebarType = {
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

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsTypes) => {
    return state;
}