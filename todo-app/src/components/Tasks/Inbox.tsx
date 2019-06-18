import React from 'react';
import { Form } from './Form';

export class Inbox extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Inbox
                        <small>Pending tasks</small>
                    </h1>
                </section>

                <section className="content container-fluid">
                    <Form/>
                </section>
            </div>
        );
    }
}