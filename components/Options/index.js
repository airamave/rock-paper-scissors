import React, { Component } from 'react';

import Button from './Button';

class Options extends Component {
    render() {
        return (
            <div className="options">
                <Button handler={this.props.selectOption} type="rock" />
                <Button handler={this.props.selectOption} type="paper" />
                <Button handler={this.props.selectOption} type="scissors" />
            </div>
        );
    }
}

export default Options;