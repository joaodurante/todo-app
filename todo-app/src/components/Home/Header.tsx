import React from 'react';

export class Header extends React.Component {
    render() {
        return (
            <header className="main-header">
                <a href="#" className="logo">
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
                                    <span>João Durante</span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="user-header">
                                        <p className="text-center">Joao Durante</p>
                                    </li>

                                    <li className="user-footer">
                                        <div className="pull-left">
                                            <a href="#" className="btn btn-default btn-flat">Profile</a>
                                        </div>

                                        <div className="pull-right">
                                            <a href="#" className="btn btn-default btn-flat">Sign Out</a>
                                        </div>
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
