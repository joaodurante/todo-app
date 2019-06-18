import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div className="box box-default">
                <div className="box-body no-padding">
                    <table className="table">
                        <tbody>

                            <tr>
                                <td>
                                    <button type="button" className="btn btn-default btn-circle btn-sm">
                                        <i className="fa fa-check check-icon"></i>
                                    </button>
                                </td>
                                <td>
                                    Text1
                                </td>
                                <td className="pull-right col-sm-2">
                                    16/04/2019
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button type="button" className="btn btn-default btn-circle btn-sm">
                                        <i className="fa fa-check check-icon"></i>
                                    </button>
                                </td>

                                <td>
                                    Text2
                                </td>
                                <td className="pull-right col-sm-2">
                                    24/12/2020
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <button type="button" className="btn btn-default btn-circle btn-sm">
                                        <i className="fa fa-check check-icon"></i>
                                    </button>
                                </td>
                                <td>
                                    Text3
                                </td>
                                <td className="pull-right col-sm-2">
                                    31/10/2023
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}