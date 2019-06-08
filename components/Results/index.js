import React, { Component } from 'react';

class Results extends Component {
    renderResults () {
        if(this.props.currentResult.winner === 'cpu') {
            return <span>{this.props.currentResult.cpu} wins {this.props.currentResult.user}... CPU Wins!!</span>
        }else if(this.props.currentResult.winner === 'user') {
            return <span>{this.props.currentResult.user} wins {this.props.currentResult.cpu}... You Win!!</span>
        }else{
            return <span>It's a Draw, No one wins!!</span>
        }
    }

    render() {
        return (
            <div>
                <div className="results">
                    <div>
                        <span className="results-titles">Me</span>
                        <span className="results-scores">{this.props.scores.user}</span>
                    </div>
                    <div>
                        <span> </span>
                        <span className="results-scores">-</span>
                    </div>
                    <div>
                        <span className="results-titles">CPU</span>
                        <span className="results-scores">{this.props.scores.cpu}</span>
                    </div>
                </div>
                <div className="result-text">
                    <span> {this.props.currentResult === '' ? '' : this.renderResults()}</span>
                </div>
            </div>
        );
    }
}

export default Results;