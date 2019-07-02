/**
 * Authentication page component
 * 
 * handleLogin(): change the value (true/false) to switch between Signin or Signup components
 * signIn(): send a request that contains email and password to signin
 * props.loggedIn: boolean that indicates if the user is logged in
 * props.validateToken: function that will validate the token stored in LocalStorage
 * state.loginMode: state that determines wich component will be rendered
 */

import React from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { env } from '../../common/environment';
import { fetcher } from '../../common/fetch';
import { Redirect } from 'react-router-dom';

interface IProps {
    loggedIn: boolean,
    validateToken: any
 }

interface IState {
    loginMode: boolean
}

export class Authenticate extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = { loginMode: true };
    }

    handleLogin = () => {
        this.setState({ loginMode: !this.state.loginMode });
    }

    signIn = async (data: any) => {
        try{
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            let res = await fetcher('/users/authenticate', options);
            if(res.ok){
                let data: any = await res.json();
                localStorage.setItem(env.security.userKey, data.accessToken);
                this.props.validateToken();
            }
            else
                console.log(`Request rejected with status ${res.status}`);
        
        }catch(err){
            console.log(err);
        }
    }

    render() {
        if(this.props.loggedIn)
            return(<Redirect to="/app" />);

        else{
            const loginMode = this.state.loginMode;
            return (
                <div className="hold-transition login-page">
                    {loginMode
                        ? (<Login handler={this.handleLogin} signIn={this.signIn} />)
                        : (<Register handler={this.handleLogin} signIn={this.signIn} />)}
                </div>
            )
        } 
    }
}