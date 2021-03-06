/**
 * Login component
 * 
 * handleLogin(): will call signIn when the form is submitted
 */

import React from 'react';

interface IProps{
    handler: any,
    signIn: any
}

export class Login extends React.Component<IProps> {
    handleLogin = (event: any) => {
        event.preventDefault();
        if(!event.target.checkValidity())
            return;

        const data = {
            email: event.target.email.value,
            password: event.target.password.value
        }
        this.props.signIn(data);
    }

    render() {
        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="#">
                        <b>toDo</b>App
                    </a>
                </div>

                <div className="login-box-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <form onSubmit={this.handleLogin} noValidate>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" name="email" placeholder="Email" required></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" name="password" placeholder="Password" required></input>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 pull-right">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                            </div>
                        </div>
                    </form>
                    <a href="#" onClick={this.props.handler} className="text-center">Register a new membership</a>
                </div>
            </div>
        )
    }
}