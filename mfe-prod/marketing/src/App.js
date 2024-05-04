import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

/**
 * A simple application from scratch
 * React version 17.0.1
 * Webpack version 5.88.0
 */

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
})

export default ({ history }) => {

  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
