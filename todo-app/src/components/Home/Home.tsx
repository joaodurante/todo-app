import React from 'react';
import { Header } from './Header';
import { Sidebar } from './SideBar';
import { Content } from './Content';
import { Footer } from './Footer';

export class Home extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Sidebar/>
                <Content/>
                <Footer/> 
            </div>
        );
    }
}