import React from 'react';

export class Sidebar extends React.Component{
    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="header">MENU</li>

                        <li className="active">
                            <a href="#">
                                <i className="fa fa-th"></i>
                                <span>Pending</span>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <i className="fa fa-check"></i>
                                <span>Completed</span>
                            </a>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}