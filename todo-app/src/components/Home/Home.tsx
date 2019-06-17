import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Content } from './Content';
import { Footer } from './Footer';
import { Inbox } from '../Tasks/Inbox';
import { Completed } from '../Tasks/Completed';
import { Today } from '../Tasks/Today';

interface IProps{
    match: any
}

interface IState{}

export class Home extends React.Component<IProps, IState>{
    constructor(props: Readonly<IProps>){
        super(props);
    }
        
    render(){
        return(
            <div>
                <Header/>
                <Sidebar match={this.props.match}/>
                <Switch>
                    <Route path={`${this.props.match.path}`} exact component={Inbox}></Route>
                    <Route path={`${this.props.match.path}/today`} component={Today}></Route>
                    <Route path={`${this.props.match.path}/completed`} component={Completed}></Route>
                </Switch>
                <Footer/> 
            </div>
        );
    }
}