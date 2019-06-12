import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export class Content extends React.Component{
    constructor(props: Readonly<{}>){
        super(props);
        this.setState({filter: 'inbox'});
    }
    
    render(){
        return(
            <div className="content-wrapper">
                <section className="content-header">
                    <BrowserRouter>
                        <Switch>
                            {/* <Route path="/" exact={true} component={} />
                            <Route path="/today" component={} />
                            <Route path="/done" component={} /> */}
                        </Switch>
                    </BrowserRouter>
                </section>
                <section className="content container-fluid"></section>
            </div>
        );
    }
}
