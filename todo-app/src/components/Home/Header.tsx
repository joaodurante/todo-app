import React from 'react';
import { Logout } from '../Authenticate/Logout';
import userimg from '../../assets/user-img.png';

interface IProps{
    user: any
}

export class Header extends React.Component<IProps> {
    render() {
        return (
            <header className="main-header">
                <a href="" className="logo">
                    <span className="logo-lg">
                        <b>toDo</b>App
                    </span>
                    <span className="logo-mini">
                        <b>toDo</b>
                    </span>
                </a>

                <nav className="navbar navbar-static-top" role="navigation">
                    <div className="navbar-custom-menu">
                        <ul className="nav navbar-nav">
                            <li className="dropdown user user-menu">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                    <span>Welcome {this.props.user.name}</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <img src={userimg} className="img-circle" />
                                        <p className="text-center">{this.props.user.name}</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>

                                        <Logout />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}
