/**
 * Authentication page component
 * 
 * handleLogin(): change the value (true/false) to switch between Signin or Signup components
 * signIn(): send a request that contains email and password to signin
 */

import React from 'react';
import { Login } from './Login';
import { Register } from './Register';
import { env } from '../../common/environment';
import { fetcher } from '../../common/fetch';

interface IProps { }

interface IState {
    isLogin: boolean
}

export class Authenticate extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>) {
        super(props)
        this.state = { isLogin: true };
    }

    handleLogin = () => {
        this.setState({ isLogin: !this.state.isLogin });
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
            }
            else
                console.log(`Request rejected with status ${res.status}`);
        
        }catch(err){
            console.log(err);
        }
    }

    render() {
        const isLogin = this.state.isLogin;
        return (
            <div className="hold-transition login-page">
                {isLogin
                    ? (<Login handler={this.handleLogin} signIn={this.signIn} />)
                    : (<Register handler={this.handleLogin} signIn={this.signIn} />)}
            </div>
        )
    }
}