import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
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
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                               />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsState={props.state.dialogsPage}
                               addMessage={props.addMessage}
                               updateNewMessageText={props.updateNewMessageText}
                           />}/>
                    <Route path="/news" render={News}/>
                    <Route path="/music" render={Music}/>
                    <Route path="/settings" render={Settings}/>
                </div>
            </div>
    );
}

