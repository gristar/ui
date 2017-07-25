import React from 'react';
import render from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router from 'react-router';
import routes from './routes.js';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
    <Router>
        { routes }
    </Router>,
    document.getElementById('app')
);
