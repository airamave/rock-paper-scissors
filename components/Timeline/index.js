import React, { Component } from 'react';

class Timeline extends Component {
    renderTimeline = () => {
        return this.props.timeline.map( (item, index) => {
            return(
                <li key={index}>
                    <img src={`../../assets/images/${item.user}.png`}/>
                    <div></div>
                    <img src={`../../assets/images/${item.cpu}.png`}/>
                </li>
            )
        });
    }

    render(){
        return(
            <ul className="timeline">
                {this.renderTimeline()}
            </ul>
        );
    }
}

export default Timeline;