import React from 'react';
import './index.css';
import {state, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addMessage, RootStateType, updateNewMessageText, updateNewPostText} from './redux/state'
import {addPost} from './redux/state'
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
                updateNewMessageText={updateNewMessageText}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
subscribe(rerenderEntireTree);