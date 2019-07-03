import React from 'react';

interface IProps{
    user:any
}

export class Completed extends React.Component<IProps> {
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
                    
                </section>
            </div>
        );
    }
}