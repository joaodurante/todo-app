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
        this.state = {active: 0};
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