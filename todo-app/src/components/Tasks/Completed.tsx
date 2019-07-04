import React from 'react';
import { Form } from './Form';
import { List } from './List';

interface IProps{
    user:any
}

export class Completed extends React.Component<IProps> {
    constructor(props: Readonly<IProps>){
        super(props);
    }

    filteredList = () => {
        let initialTasks = this.props.user.tasks || [];
        let filteredTasks: any[] = [];
        
        initialTasks.map( function(task: any) {  
            if(task.done === true)
                filteredTasks.push(task);
        });

        return <List tasks={filteredTasks}/>
    }

    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Completed
                        <small>Completed tasks</small>
                    </h1>
                </section>

                <section className="content container-fluid">
                    <Form />
                    {this.filteredList()}
                </section>
            </div>
        );
    }
}