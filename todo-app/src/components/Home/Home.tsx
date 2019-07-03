/**
 * Home page component
 * 
 * redirectWhenNotLogged: will check the loggedIn props, if it's false, will redirect to auth page
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
import { fetcher } from '../../common/fetch';

interface IProps{
    match: any,
    loggedIn: boolean,
    validateToken: any
}

interface IState{
    user: any;
}

export class Home extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props);
        this.state = { user: {} };
        this.getUserData();
    }

    redirectWhenNotLogged = () => {
        if(!this.props.loggedIn)
            return <Redirect to="/auth" />
        else
            return false;
    }

    getUserData = async () => {
        if(!this.redirectWhenNotLogged()){
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            let res = await fetcher('/user', options);
            if(res.ok){
                let data: any = await res.json();
                this.setState({ user: data });
            }
        }
    }
        
    render(){
        return(
            <div>
                {this.redirectWhenNotLogged()}
                <Header user={this.state.user}/>
                <Sidebar match={this.props.match}/>
                <Switch>
                    <Route exact path={`${this.props.match.path}`} render={(props) => 
                        <Inbox {...props} user={this.state.user} />
                    } />
                    
                    <Route path={`${this.props.match.path}/today`} render={(props) => 
                        <Today {...props} user={this.state.user} />
                    } />

                    <Route path={`${this.props.match.path}/completed`} render={(props) => 
                        <Completed {...props} user={this.state.user} />
                    } />
                </Switch>
                <Footer/> 
            </div>
        );
        
    }
}