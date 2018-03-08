import React from 'react';
import { 
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

// Import root app
import App from '../App';

// Import page level components
import Home from '../pages/home';
import Profile from '../pages/profile';
import Error from '../pages/error';

// Construct application routes
const Routes = (
  <HashRouter>
    <App>
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/profile" component = {Profile} />

        <Route component={Error} />
      </Switch>
    </App>
  </HashRouter>
);

export default Routes;
