/**
 * Task component is a single task
 * 
 * Task.renderButton(): if props.pending is true, render the button to complete the task, else don't render
 * Task.formatDate(): format the date stored in db
 * Task.props.pending: flag that stores wheter the list consists of completed tasks or not
 * Task.props.task: a single task element
 */

import React from 'react';

interface IPropsTask {
    task: any,
    pending: boolean,
}

export class Task extends React.Component<IPropsTask>{
    renderButton = () => {
        if (this.props.pending) {
            return (
                <td className="pull-left">
                    <button type="button" className="btn btn-default btn-circle btn-sm">
                        <i className="fa fa-check check-icon"></i>
                    </button>
                </td>
            )
        }
    }

    formatDate = (date: string) => {
        if (date) {
            const splitDate = date.split('-', 3);
            const day = splitDate[2].split('T', 1);
            let newDate = {
                day: day[0],
                month: splitDate[1],
                year: splitDate[0]
            }
            return `${newDate.month}/${newDate.day}/${newDate.year}`;
        } else
            return '';
    }

    render() {
        return (
            <tr>
                {this.renderButton()}
                <td className="pull-left">
                    {this.props.task.content}
                </td>
                <td className="date-text pull-right">
                    <i className="fa fa-calendar">&nbsp;&nbsp;</i>
                    {this.formatDate(this.props.task.date)}
                </td>
            </tr>
        )
    }
}
