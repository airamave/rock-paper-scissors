import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CSS from '../assets/css/styles.scss';

import Title from './Title';
import Options from './Options';
import Results from './Results';
import Timeline from './Timeline';

class App extends Component {
  constructor() {
    super();
    this.state = {
      timeline: [],
      scores: {
        user: 0, 
        cpu: 0
      },
      currentResult: ''
    }
  }

  selectOption = (opt) => {
    let winner = false;
    const Choices = [ 'rock', 'paper', 'scissors' ];
    const cpuChoice = Choices[Math.floor(Math.random() * 3 )];

    switch (opt) {
      case 'rock' :
        winner = cpuChoice === 'paper'
                  ? 'cpu'
                  : cpuChoice === 'scissors'
                    ? 'user'
                    : false;
      break;
      case 'paper' :
        winner = cpuChoice === 'scissors'
                  ? 'cpu'
                  : cpuChoice === 'rock'
                    ? 'user'
                    : false;
      break;
      case 'scissors' :
        winner = cpuChoice === 'rock'
                  ? 'cpu'
                  : cpuChoice === 'paper'
                    ? 'user'
                    : false;
      break;
    }
    this.updateTimeline(opt, cpuChoice);
    this.setResults(winner, opt, cpuChoice);
  }

  updateTimeline = (user, cpu) => {
    this.setState(prevState => ({
      timeline: [
        ...prevState.timeline,
        {user, cpu}
      ]
    }));
  }
  
  setResults = (winner = false, user, cpu) => {
    if(winner){
      this.setState(prevState => ({
        scores: {
          ...prevState.scores,
          [winner]: prevState.scores[winner] + 1
        }
      }));
    }

    this.setState({
      currentResult: {user, cpu, winner}
    });
  }

  render() {
    return (
      <div className="app">
        <Title />
        <Options selectOption={this.selectOption}/>
        <Results scores={this.state.scores} currentResult={this.state.currentResult}/>
        <Timeline timeline={this.state.timeline} />
      </div>
    )
  }

}
let container = document.getElementById('app');
let component = <App />;

ReactDOM.render(component, container);
