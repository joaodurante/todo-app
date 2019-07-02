/**
 * Home page component
 * 
 * props.match: contain some useful values like url path
 * props.loggedIn: boolean that indicates if the user is logged in
 * props.validateToken: function that will validate the token stored in LocalStorage
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Footer } from './Footer';
import { Inbox } from '../Tasks/Inbox';
import { Completed } from '../Tasks/Completed';
import { Today } from '../Tasks/Today';

interface IProps{
    match: any,
    loggedIn: boolean,
    validateToken: any
}

interface IState{}

export class Home extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props);
    }

    redirectWhenNotLogged = () => {
        if(!this.props.loggedIn)
            return <Redirect to="/auth" />
    }
        
    render(){
        return(
            <div>
                {this.redirectWhenNotLogged()}
                <Header/>
                <Sidebar match={this.props.match}/>
                <Switch>
                    <Route path={`${this.props.match.path}`} exact component={Inbox}></Route>
                    <Route path={`${this.props.match.path}/today`} component={Today}></Route>
                    <Route path={`${this.props.match.path}/completed`} component={Completed}></Route>
                </Switch>
                <Footer/> 
            </div>
        );
        
    }
}