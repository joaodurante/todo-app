import React from 'react';

interface IProps{
    task: number,
    handleClick: Array<any>
}
/**
 * this.props.task === 0 -> Inbox content
 * this.props.task === 1 -> Today content
 * this.props.task === 2 -> Completed content
 * this.props.handleClick[ X ] -> task = X
 */

export class Sidebar extends React.Component<IProps>{
    constructor(props: Readonly<IProps>){
        super(props);
    }

    render(){
        return(
            <aside className="main-sidebar">
                <section className="sidebar">
                    <ul className="sidebar-menu tree" data-widget="tree">
                        <li className="header">MENU</li>

                        <li className={this.props.task === 0 ? 'active' : ''}>
                            <a href="#" onClick={this.props.handleClick[0]}>
                                <i className="fa fa-th"></i>
                                <span>Inbox</span>
                            </a>
                        </li>

                        <li className={this.props.task === 1 ? 'active' : ''}>
                            <a href="#" onClick={this.props.handleClick[1]}>
                                <i className="fa fa-calendar-o"></i>
                                <span>Today</span>
                            </a>
                        </li>

                        <li className={this.props.task === 2 ? 'active' : ''}>
                            <a href="#" onClick={this.props.handleClick[2]}>
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