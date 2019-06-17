import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { Inbox } from '../Tasks/Inbox';
import { Completed } from '../Tasks/Completed';
import { Today } from '../Tasks/Today';

export class Content extends React.Component {
    render() {
        return(
            <div>
                <Route path="/app/" exact component={Inbox}></Route>
                <Route path="/app/today" component={Today}></Route>
                <Route path="/app/completed" component={Completed}></Route>
            </div>
        )
    }
}