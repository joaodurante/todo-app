/**
 * List and Task components
 * List component is the entire task list
 * Task component is a single task
 * 
 * List.props.pending: flag that stores wheter the list consists of completed tasks or not
 * List.props.tasks: array of tasks
 * 
 * Task.renderButton(): if props.pending is true, render the button to complete the task, else don't render
 * Task.props.pending: flag that stores wheter the list consists of completed tasks or not
 * Task.props.task: a single task element
 */

import React from 'react';

interface IPropsList{
    tasks: any[],
    pending: boolean
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
                                    <Task task={task} pending={this.props.pending} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
    }
}

interface IPropsTask{
    task: any,
    pending: boolean
}

class Task extends React.Component<IPropsTask>{
    renderButton = () => {
        if(this.props.pending){
            return(
                <td className="pull-left">
                    <button type="button" className="btn btn-default btn-circle btn-sm">
                        <i className="fa fa-check check-icon"></i>
                    </button>
                </td>
            )
        }
    }

    render() {
        return(
            <tr>
                {this.renderButton()}
                <td className="pull-left">
                    {this.props.task.content}
                </td>
                <td className="date-text pull-right">
                    <i className="fa fa-calendar">&nbsp;&nbsp;</i>
                    {this.props.task.date}
                </td>
            </tr>
        )
    }
}
