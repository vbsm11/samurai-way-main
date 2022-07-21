import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<AppPropsType> = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbarState={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() =>
                               <Profile
                                   profileState={props.state.profilePage}
                                   dispatch={props.dispatch}
                               />}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer
                               dialogsState={props.state.dialogsPage}
                               dispatch={props.dispatch}
                           />}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>
            </div>
    );
}

