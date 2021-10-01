import React from 'react';

import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Signup from './SignupForm';
import ParentLogin from './ParentLoginForm';
import AdminLogin from './AdminLoginForm';
import Position from './Position';
import AdminCarDisplay from './AdminCarDisplay';

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ParentLoginForm' component={ParentLogin} />
        <Route path='/SignupForm' component={Signup} />
        <Route path='/AdminLoginForm' component={AdminLogin} />
        <Route path='/Position' component={Position} />
        <Route path='/AdminCarDisplay' component={AdminCarDisplay} />
    </Switch>
)

export default Main;