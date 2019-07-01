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

    submit = (url: String, data: any) => {
        try{
            const options = {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            fetcher(url, options).then(res => {
                if(res.ok)
                    localStorage.setItem(env.security.userKey, JSON.stringify(res.body));
            });
        }catch(err){
            console.log(err);
        }
    }

    render() {
        const isLogin = this.state.isLogin;
        return (
            <div className="hold-transition login-page">
                {isLogin
                    ? (<Login handler={this.handleLogin} />)
                    : (<Register handler={this.handleLogin} />)}
            </div>
        )
    }
}