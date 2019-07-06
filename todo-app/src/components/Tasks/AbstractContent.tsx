/**
 * Abstract class that contains useful functions used to submit a task form
 * 
 * getAllTasks(): method that send a request to get all the user tasks
 * createNewTask(): method that send a request to create a new user task
 * completeTask(): method that send a request to complete a specified task
 * state.url: request url to get the tasks (allPending, todayPending or completed)
 * state.tasks: list of tasks
 */

import React from 'react';
import { fetcher } from '../../common/fetch';

interface IProps{ }
interface IState{ url: string, tasks: any }

export abstract class AbstractContent extends React.Component<IProps, IState>{
    getAllTasks = async () => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetcher(this.state.url, options);
        if(res.ok){
            let data: any = await res.json();
            this.setState({ tasks: data });
        }
    }

    createNewTask = async (data: any) => {
        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const res = await fetcher('/user/task', options);
        const tasks = await res.json();
        if(res.status === 200){
            this.setState({ tasks: tasks });
        }
    }

    completeTask = async (taskId: string) => {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        let res = await fetcher(`/user/task/${taskId}`, options);
        if(res.ok){
            let tasks = await res.json();
            this.setState({ tasks: tasks })
        }  
    }
}