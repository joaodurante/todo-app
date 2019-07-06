/**
 * Form to create new tasks component
 * 
 * handleSubmit(): get the data from forms and call the props.CreateNewTask passing the data
 * handleContentChange(): update the content form value
 * handleDateChange(): update the date form value
 * props.createNewTask: function that make a request to insert the new task
 * state.content: value of content input
 * state.date: value of date input
 */

import React from 'react';

interface IProps{
    createNewTask: any
}

interface IState{
    content: string,
    date: string
}

export class Form extends React.Component<IProps, IState> {
    constructor(props: Readonly<IProps>){
        super(props);
        this.state = {content: '', date: ''};
    }

    handleSubmit = async (event: any) => {
        event.preventDefault();
        if(!event.target.checkValidity())
            return;
        
        const data = {
            content: event.target.content.value,
            date: event.target.date.value
        }
        this.setState({content: "", date: ""});
        this.props.createNewTask(data);
        
    }


    handleContentChange = (event: any) => {
        this.setState({ content: event.value })
    }

    handleDateChange = (event: any) => {
        this.setState({ date: event.value });
    }

    render() {
        return (
            <div className="box box-default" data-widget="box-widget">
                <div className="box-header">
                    <h3 className="box-title">New task</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse" title="Collapse">
                            <i className="fa fa-minus"></i>
                        </button>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className="box-body">
                            <div className="col-sm-8">
                                <div className="form-group has-feedback">
                                    <input autoComplete="off" type="text" onChange={this.handleContentChange} value={this.state.content}
                                        className="form-control" placeholder="Text" name="content" required></input>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="input-group date" data-provide="datepicker">
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                    <input autoComplete="off" type="text" onChange={this.handleDateChange} value={this.state.date}
                                        className="form-control" name="date" placeholder="Schedule"></input>
                                </div>
                            </div>
                        
                    </div>
                    
                    <div className="box-footer">
                        <button type="submit" className="btn btn-default pull-right">Submit</button>
                    </div>
                </form>
                
            </div>
        );
    }
}