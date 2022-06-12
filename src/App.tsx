import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
}

export const App: React.FC<AppPropsType> = (props) => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar navbarState={props.state.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile profileState={props.state.profilePage}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsState={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>
            </div>
    );
}

