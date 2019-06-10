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

                <nav className="navbar navbar-static-top" role="navigation"></nav>
            </header>
        )
    }
}
