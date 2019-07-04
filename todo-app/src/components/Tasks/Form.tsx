import React from 'react';
import { fetcher } from '../../common/fetch';
import { Redirect } from 'react-router-dom';

export class Form extends React.Component {
    handleSubmit = async (event: any) => {
        event.preventDefault();
        if(!event.target.checkValidity())
            return;

        const data = {
            content: event.target.content.value,
            date: event.target.date.value
        }

        const options = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        let res = await fetcher('/user/task', options);
        if(res.status === 200){
            window.location.reload();
        }
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
                                    <input autoComplete="off" type="text" className="form-control" placeholder="Text" name="content" required></input>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="input-group date" data-provide="datepicker">
                                    <div className="input-group-addon">
                                        <i className="fa fa-calendar"></i>
                                    </div>
                                    <input autoComplete="off" type="text" className="form-control" name="date" placeholder="Schedule"></input>
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