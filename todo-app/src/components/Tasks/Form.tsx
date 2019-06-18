import React from 'react';

export class Form extends React.Component {
    render() {
        return (
            <div className="box box-default" data-widget="box-widget">
                <div className="box-header">
                    <h3 className="box-title">New task</h3>
                    <div className="box-tools pull-right">
                        <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i></button>
                    </div>
                </div>
                <form role="form">
                    <div className="box-body">
                        <div className="col-sm-8">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Text" name="task"></input>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="input-group date" data-provide="datepicker">
                                <div className="input-group-addon">
                                    <i className="fa fa-calendar"></i>
                                </div>
                                <input type="text" className="form-control"></input>
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