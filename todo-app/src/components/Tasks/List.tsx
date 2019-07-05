/**
 * List component render the entire task list
 * 
 * List.props.pending: flag that stores wheter the list consists of completed tasks or not
 * List.props.tasks: array of tasks
 */

import React from 'react';
import { Task } from './Task';

interface IPropsList{
    tasks: any[],
    pending: boolean,
    today: boolean
}

export class List extends React.Component<IPropsList> {
    render() {
        let tasks = this.props.tasks;
        if(!tasks)
            return null;
        else
            return (
                <div className="box box-default">
                    <div className="box-header">
                        <h3 className="box-title">Tasks</h3>
                    </div>
                    <div className="box-body no-padding">
                        <table className="table">
                            <tbody>
                                {tasks.map(task => 
                                    <Task task={task} pending={this.props.pending} today={this.props.today} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
    }
}

