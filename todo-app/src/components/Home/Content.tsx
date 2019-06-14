import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Inbox } from '../Tasks/Inbox';
import { Completed } from '../Tasks/Completed';
import { Today } from '../Tasks/Today';

interface IProps{
    task: number
}

export class Content extends React.Component<IProps> {
    constructor(props: Readonly<IProps>) {
        super(props);
    }

    render() {
        switch(this.props.task){
            case 0:
                return(<Inbox/>)
            case 1:
                return(<Today/>)
            case 2:
                return(<Completed/>)
        }
    }
}