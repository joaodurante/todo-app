import React from 'react';
import { render } from 'react-dom';

export class Content extends React.Component{
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header"></section>
                <section className="content container-fluid"></section>
            </div>
        );
    }
}