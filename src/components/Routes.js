import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/calc" component={App} />
            <Route path="/quote" component={Quote} />
        </Switch>
    </BrowserRouter>
}

export default Routes;