import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Authenticate } from './components/Authenticate/Authenticate';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/auth" component={Authenticate} />
        </Switch>
      </BrowserRouter>
        );
      }
    }
    
