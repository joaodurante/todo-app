/**
 * List component render the entire task list
 * 
 * renderButton(): renders the completeButton, according to the value of the pending flag
 * props.tasks: array of tasks
 * props.pending: flag that stores wheter the list consists of completed tasks or not
 * props.completeTask: optional property function that send a patch request to complete a specified task
 */

import React from 'react';
import { Task } from './Task';

interface IProps{
    tasks: any[],
    pending: boolean,
    completeTask?: any
}

export class List extends React.Component<IProps> {
    renderButton = (task: any) => {
        if (this.props.pending) {
            return (
                <td className="pull-left">
                    <button type="button" className="btn btn-default btn-circle btn-sm"
                        onClick={() => this.props.completeTask(task._id)} >
                        <i className="fa fa-check check-icon"></i>
                    </button>
                </td>
            )
        }
    }

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
                                    <Task key={task._id} task={task} renderButton={this.renderButton}/>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
    }
}

