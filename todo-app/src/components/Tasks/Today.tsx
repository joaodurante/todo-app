import React from 'react';
import { Form } from './Form';
import { List } from './List';

interface IProps{
    user:any
}

export class Today extends React.Component<IProps> {
    filterList = () => {
        let initialTasks = this.props.user.tasks || [];
        let filteredTasks: any[] = [];
        
        initialTasks.map( function(task: any) {  
            if(task.done === false)
                filteredTasks.push(task);
        });

        return <List tasks={filteredTasks} pending={true} today={true}/>
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
                    <Form />
                    {this.filterList()}
                </section>
            </div>
        );
    }
}