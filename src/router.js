import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Main from './pages/Main';

export default function src() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/main' component={Main} />
        </Switch>
    </BrowserRouter>
  );
}
