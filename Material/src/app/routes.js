/**
 * Created by gristar on 2017/7/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router'
import Login from './user/Login';
import Main from './index/Main';
import Register from './user/Register';

/*const Register = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./user/Register').default)
    }, 'register')
};

const Main = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./index/Main').default)
    }, 'main')
};*/

render(
    <Router history={hashHistory}>
        <IndexRoute component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/main" component={Main}/>
        <Redirect to="/login" from="*"/>
    </Router>
, document.getElementById('app'));