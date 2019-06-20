import React from 'react';

export class List extends React.Component {
    tasks = [
        { _id: 0, content: 'Do it!', date: '16/04/2019' },
        { _id: 1, content: 'Just do it!', date: '12/09/2019' },
        { _id: 2, content: 'Make your dreams come true!', date: '23/01/2019' },
        { _id: 3, content: 'Do it!', date: '31/12/2019' }
    ]
    render() {
        return (
            <div className="box box-default">
                <div className="box-header">
                    <h3 className="box-title">Tasks</h3>
                </div>
                <div className="box-body no-padding">
                    <table className="table">
                        <tbody>
                            {this.tasks.map(task => 
                                <Task task={task} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

interface IProps{
    task: any
}

class Task extends React.Component<IProps>{
    constructor(props: Readonly<IProps>){
        super(props);
    }

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
