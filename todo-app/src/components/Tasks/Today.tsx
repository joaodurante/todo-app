import React from 'react';

interface IProps{
    user:any
}

export class Today extends React.Component<IProps> {
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
                    
                </section>
            </div>
        );
    }
}