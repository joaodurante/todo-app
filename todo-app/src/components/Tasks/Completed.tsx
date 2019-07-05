/**
 * Completed tasks component, list only the completed tasks
 * 
 * filterList(): apply a filter to select only the completed tasks
 */

import React from 'react';
import { Form } from './Form';
import { List } from './List';

interface IProps{
    user:any,
}

export class Completed extends React.Component<IProps> {
    filterList = () => {
        let initialTasks = this.props.user.tasks || [];
        let filteredTasks: any[] = [];
        
        initialTasks.map( function(task: any) {  
            if(task.done === true)
                filteredTasks.push(task);
        });

        return <List tasks={filteredTasks} pending={false} today={false}/>
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Completed
                        <small>Completed tasks</small>
                    </h1>
                </section>

                <section className="content">
                    {this.filterList()}
                </section>
            </div>
        );
    }
}