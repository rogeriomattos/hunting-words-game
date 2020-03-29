import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Easy from './pages/Easy';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/easy" exact component={Easy} />
            </Switch>
        </BrowserRouter>
    );
}