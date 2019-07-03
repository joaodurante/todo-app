/**
 * Register component
 * 
 * handleSubmit(): will post when the form is submitted and then call signIn
 */

import React from 'react';

interface IProps{
    handler: any,
    signIn: any
}

export class Register extends React.Component<IProps>{
    handleSubmit = (event: any) => {
        event.preventDefault();
        if(!event.target.checkValidity())
            return;

        const data = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch('/users', options).then(res => {
            if(res.ok)
                this.props.signIn(data);
            else
                console.log(`Request rejected with status ${res.status}`);
        }).catch(console.error);
    }

    render(){
        return(
            <div className="register-box">
                <div className="register-logo">
                    <a href="#">
                        <b>toDo</b>App
                    </a>
                </div>

                <div className="register-box-body">
                    <p className="login-box-msg">Register a new membership</p>
                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" name="name" placeholder="Name" required></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" name="email" placeholder="Email" required></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" name="password" placeholder="Password" required></input>
                        </div>
                        <div className="row">
                            <div className="col-xs-4 pull-right">
                                <button type="submit" className="btn btn-primary btn-block btn-flat">Register</button>
                            </div>
                        </div>
                    </form>
                    <a href="#" onClick={this.props.handler} className="text-center">I already have a membership</a>
                </div>
            </div>
        )
    }
}