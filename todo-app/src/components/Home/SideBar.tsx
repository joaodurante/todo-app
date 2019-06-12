import React from 'react';

interface IProps{}

interface IState{
    active: number
}

export class Sidebar extends React.Component<IProps, IState>{
    constructor(props: Readonly<{}>){
        super(props);
        this.state = {active: 1};
    }

    handleInboxClick = () => {
        this.setState({active: 1});
    }

    handleTodayClick = () => {
        this.setState({active: 2});
    }

    handleCompletedClick = () => {
        this.setState({active: 3});
    }

    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="header">MENU</li>

                        <li className={this.state.active === 1 ? 'active' : ''}>
                            <a href="#" onClick={this.handleInboxClick}>
                                <i className="fa fa-th"></i>
                                <span>Inbox</span>
                            </a>
                        </li>

                        <li className={this.state.active === 2 ? 'active' : ''}>
                            <a href="#" onClick={this.handleTodayClick}>
                                <i className="fa fa-calendar-o"></i>
                                <span>Today</span>
                            </a>
                        </li>

                        <li className={this.state.active === 3 ? 'active' : ''}>
                            <a href="#" onClick={this.handleCompletedClick}>
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