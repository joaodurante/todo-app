import React from 'react';

interface IProps{
    handler: any
}

export class Register extends React.Component<IProps>{
    constructor(props: Readonly<IProps>){
        super(props);
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
                    <form action="/" method="post">
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" placeholder="Name"></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="email" className="form-control" placeholder="Email"></input>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" placeholder="Password"></input>
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