import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={store.getState()}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    )
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);