/**
 * Completed tasks component, list only the completed tasks
 * 
 * getAllTasks(): method that send a request to get all the user tasks
 * state.tasks: array of completed tasks
 */

import React from 'react';
import { List } from './List';
import { fetcher } from '../../common/fetch';

interface IProps{}
interface IState{
    tasks: any[]
}

export class Completed extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>){
        super(props);
        this.getAllTasks();
        this.state = { tasks: [] };
    }

    getAllTasks = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetcher('/user/task/completed', options);
        if(res.ok){
            let data: any = await res.json();
            this.setState({ tasks: data });
        }
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Completed
                        <small>All the completed tasks</small>
                    </h1>
                </section>

                <section className="content">
                    <List tasks={this.state.tasks} pending={false}/>
                </section>
            </div>
        );
    }
}