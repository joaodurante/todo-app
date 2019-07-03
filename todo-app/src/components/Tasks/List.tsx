import React from 'react';

interface IPropsList{
    tasks: any[]
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
                                    <Task task={task} />
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
    }
}

interface IPropsTask{
    task: any
}

class Task extends React.Component<IPropsTask>{
    render() {
        return(
            <tr>
                <td className="pull-left">
                    <button type="button" className="btn btn-default btn-circle btn-sm">
                        <i className="fa fa-check check-icon"></i>
                    </button>
                </td>
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
