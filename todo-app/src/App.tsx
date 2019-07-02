import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from './components/Home/Home';
import { Authenticate } from './components/Authenticate/Authenticate';

interface IProps { }

interface IState {
    loggedIn: boolean
}

export default class App extends React.Component<IProps, IState>{
  constructor(props: Readonly<IProps>){
    super(props);
    this.state = { loggedIn: this.validateToken() };
  }

  validateToken = () => {
    let token = localStorage.getItem('accessToken');
    if(token){
      this.setState({ loggedIn: true });
      return true;
    }else{
      this.setState({ loggedIn: false });
      return false;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (
            this.state.loggedIn ? ( <Redirect to="/app"/> ) : ( <Redirect to="/auth" /> )
          )} />

          <Route path="/app" render={(props) => 
            <Home {...props} loggedIn={this.state.loggedIn} validateToken={this.validateToken}/>
          } />

          <Route path="/auth" render={(props) => 
            <Authenticate {...props} loggedIn={this.state.loggedIn} validateToken={this.validateToken}/>
          } />

        </Switch>
      </BrowserRouter>
    );
  }
}