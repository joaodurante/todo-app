/**
 * Sidebar component
 * 
 * handleLoad(): check the url path to activate the right sidebar tab
 * handleClickInbox(): when the Inbox tab is clicked, the state.active will flag 0
 * handleClickToday(): when the Today tab is clicked, the state.active will flag 1
 * handleClickCompleted(): when the Completed tab is clicked, the state.active will flag 2
 * props.match: contain some useful values, like path
 * state.active: flag that stores wich tab will be active
 */

import React from 'react';
import { Link } from 'react-router-dom';

interface IProps{
    match: any
}

interface IState{
    active: number
}

export class Sidebar extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props);
        this.state = {active: this.handleLoad()};
    }

    handleLoad = () => {
        switch(window.location.pathname){
            case '/app':
                return 0;
            case '/app/today':
                return 1;
            case '/app/completed':
                return 2;
            default:
                return 0;
        }
    }

    handleClickInbox = () => {
        this.setState({active: 0});
    }

    handleClickToday = () => {
        this.setState({active: 1});
    }

    handleClickCompleted = () => {
        this.setState({active: 2});
    }

    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="header">MENU</li>

                        <li className={this.state.active === 0 ? 'active' : ''}>
                            <Link to={`${this.props.match.path}`}  onClick={this.handleClickInbox}>
                                <i className="fa fa-th"></i>
                                <span>Inbox</span>
                            </Link>
                        </li>

                        <li className={this.state.active === 1 ? 'active' : ''}>
                            <Link to={`${this.props.match.path}/today`} onClick={this.handleClickToday}>
                                <i className="fa fa-calendar-o"></i>
                                <span>Today</span>
                            </Link>
                        </li>

                        <li className={this.state.active === 2 ? 'active' : ''}>
                            <Link to={`${this.props.match.path}/completed`}  onClick={this.handleClickCompleted}>
                                <i className="fa fa-check"></i>
                                <span>Completed</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </aside>
        );
    }
}