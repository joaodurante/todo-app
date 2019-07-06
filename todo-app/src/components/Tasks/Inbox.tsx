/**
 * Inbox component, list all the pending tasks
 */

import React from 'react';
import { AbstractContent } from './AbstractContent';
import { Form } from './Form';
import { List } from './List';

interface IProps{}

export class Inbox extends AbstractContent {
    constructor(props: Readonly<IProps>){
        super(props);
        this.state = { tasks: [], url: '/user/task' };
        this.getAllTasks();
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
                    <Form createNewTask={this.createNewTask}/>
                    <List tasks={this.state.tasks} pending={true} completeTask={this.completeTask}/>
                </section>
            </div>
        );
    }
}