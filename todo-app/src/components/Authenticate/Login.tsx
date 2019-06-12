import React from 'react';

interface IProps{
    handler: any
}

export class Login extends React.Component<IProps> {
    constructor(props: Readonly<IProps>){
        super(props);
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
                    <form action="/" method="post">
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"></input>
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