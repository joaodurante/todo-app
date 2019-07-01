/**
 * Component that contains the button to sign out and its properties
 * 
 * handleLogout(): will remove the access token from local storage
 */

import React from 'react';

export class Logout extends React.Component {
    handleLogout = () => {
        localStorage.removeItem('accessToken');
    }    

    render() {
        return (
            <div className="pull-right">
                <a href="#" className="btn btn-default btn-flat" onClick={this.handleLogout}>Sign Out</a>
            </div>
        )
    }
}