/**
 * Today tasks component, render only the tasks of the actual day
 */

import React from 'react';
import { List } from './List';
import { Form } from './Form';
import { AbstractContent } from './AbstractContent';

interface IProps{}

export class Today extends AbstractContent {
    constructor(props: Readonly<IProps>){
        super(props);
        this.state = { tasks: [], url: '/user/task/today' };
        this.getAllTasks();
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Today
                        <small>Today's pending tasks</small>
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