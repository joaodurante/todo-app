import React from 'react';
import { Login } from './Login';
import { Register } from './Register';

interface IProps{}

interface IState{
    isLogin: boolean
}

export class Authenticate extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props)
        this.state = {isLogin: true};
    }

    handleLogin = () => {
        this.setState({isLogin: !this.state.isLogin});
    }

    render(){
        const isLogin = this.state.isLogin;
        return(
            <div className="hold-transition login-page">
                {isLogin
                    ? (<Login handler={this.handleLogin}/>) 
                    : (<Register handler={this.handleLogin}/>)}
            </div>
        )
    }
}