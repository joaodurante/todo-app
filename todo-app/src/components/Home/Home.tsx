import React from 'react';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Content } from './Content';
import { Footer } from './Footer';

interface IProps{}

interface IState{
    taskState: number,
    handleClick: Array<any>
}

export class Home extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props);

        /* taskState = 0 -> Inbox
           taskState = 1 -> Today
           taskState = 2 -> Completed */
        this.state = {
            taskState: 0,
            handleClick: [
                this.handleClickInbox,
                this.handleClickToday,
                this.handleClickCompleted
            ]
        };
    }

    handleClickInbox = () => {
        this.setState({ taskState: 0 })
    }

    handleClickToday = () => {
        this.setState({ taskState: 1 });
    }

    handleClickCompleted = () => {
        this.setState({ taskState: 2 })
    }

    render(){
        return(
            <div>
                <Header/>
                <Sidebar task={this.state.taskState} handleClick={this.state.handleClick}/>
                <Content task={this.state.taskState}/>
                <Footer/> 
            </div>
        );
    }
}