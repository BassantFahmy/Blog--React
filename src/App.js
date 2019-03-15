import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import './index';
import Radium from 'radium';


import Posts from './components/Posts/Posts';
import PostView from './components/Posts/Post/PostView/PostView';
import AddPost from './components/Posts/AddPost/AddPost';
import Users from './components/Users/Users';
import UserView from './components/Users/UserView/UserView';
import UserPost from './components/Users/UserView/UserPost/UserPost';
import NavBar from './components/Layout/Navbar/Navbar';


const App = (props) => (

        <Router><>
            <NavBar />
            <Switch>
                <Route exact path="/posts" component={Posts} />
                <Route exact path="/posts/:id" component={PostView} />
                <Route path="/addPost" component={AddPost} />
                <Route exact path="/users" component={Users} />
                <Route exact path="/users/:id" component={UserView} />
                <Route exact path="/userPost/:id" component={UserPost} />
            </Switch></>
        </Router>
    
);

export default Radium(App);
