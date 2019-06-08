import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <h1 className="title">
                <span className="text-rock">Rock</span>, 
                <span className="text-paper"> Paper</span> &
                <span className="text-scissors"> Scissors</span>
            </h1>
        );
    }
}

export default Title;