import React from 'react';
import Header from '../components/Header/index'
import Login from '../pages/Login/index'
import SingUp from '../pages/SingUp/index';
import PostsList from '../pages/PostsList/index';
import Post from '../pages/Post/index';
import { Switch, Route } from "react-router-dom";


export default function Router({changeButton, setChangeButton}) {
    return (
        <div>

            
                <Switch>

                    <Route exact path="/login">
                        <Login changeButton={changeButton} setChangeButton={setChangeButton}/>
                    </Route>

                    <Route exact path="/SingUp">
                        <SingUp changeButton={changeButton} setChangeButton={setChangeButton}/>
                    </Route>

                    <Route exact path="/">
                        <PostsList />
                    </Route>

                    <Route exact path="/Post/:postId">
                        <Post />
                    </Route>
                </Switch>
           

        </div>
    );
}
