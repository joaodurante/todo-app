import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/SideBar';
import { Content } from './components/Content';
import { Footer } from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Sidebar/>
        <Content/>
        <Footer/>
      </div>
    );
  }
}

