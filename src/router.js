import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';
import Login from './pages/Login';
import Register from './pages/Register'

export default function src() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
        </Switch>
    </BrowserRouter>
  );
}
