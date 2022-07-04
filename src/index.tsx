import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from './redux/state'
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                addMessage={store.addMessage.bind(store)}
                updateNewMessageText={store.updateNewMessageText.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);