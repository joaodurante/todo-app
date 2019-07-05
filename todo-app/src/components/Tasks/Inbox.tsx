/**
 * Inbox component, list all the pending tasks
 * 
 * filterList(): apply a filter to select only the pending tasks
 */

import React from 'react';
import { Form } from './Form';
import { List } from './List';

interface IProps{
    user: any
}

export class Inbox extends React.Component<IProps> {
    filterList = () => {
        let initialTasks = this.props.user.tasks || [];
        let filteredTasks: any[] = [];
        
        initialTasks.map( function(task: any) {  
            if(task.done === false)
                filteredTasks.push(task);
        });

        return <List tasks={filteredTasks} pending={true} today={false}/>
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Inbox
                        <small>Pending tasks</small>
                    </h1>
                </section>

                <section className="content container-fluid">
                    <Form />
                    {this.filterList()}
                </section>
            </div>
        );
    }
}