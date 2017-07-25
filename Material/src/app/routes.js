/**
 * Created by gristar on 2017/7/25.
 */
import React from 'react';
import { render }from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
// import Main from './index/Main';
import Login from './user/Login';
import Register from './user/Register';

render((
    <Router history={hashHistory}>
        {/*<Route path="/" component={Main}/>*/}
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    </Router>
), document.getElementById('app'));