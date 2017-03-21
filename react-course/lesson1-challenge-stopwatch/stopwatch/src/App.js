import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      enteredMinutes: 0,
      enteredSeconds: 0
    }
  }

  changeMinutesAndSeconds() {
    if (this.state.enteredSeconds < 60 && this.state.enteredMinutes < 60){
      const minutes = this.state.enteredMinutes;
      const seconds = this.state.enteredSeconds;
      this.setState({minutes: minutes, seconds: seconds});
    }
    else {
      alert('Seconds and minutes must both be under 60');
    }
    console.log(this.props);
  }

  getTimeUntilZero() {
    const minutes = this.state.minutes;
    const seconds = this.state.seconds;
    var newSeconds;
    var newMinutes;
    if (minutes < 1) {
      newSeconds = seconds - 1;
      this.setState({seconds: newSeconds});
      if (minutes < 1 && seconds < 1) {
        this.setState({minutes: 0, seconds: 0})
      }
    }
    if (minutes > 0) {
      if (seconds > 0) {
        newSeconds = seconds - 1;
        this.setState({seconds: newSeconds});
      }
      else {
        newSeconds = 59;
        newMinutes = minutes - 1;
        this.setState({minutes: newMinutes, seconds: newSeconds});
      }
    }
  }

  componentDidMount() {

      setInterval(() => this.getTimeUntilZero(), 1000);

  }

  render() {

    return (
      <div className='App'>
        <h1 className="App-title">React Stopwatch</h1>
        <h3>Please enter a time in minutes and seconds</h3>
        <Clock
          minutes={this.state.minutes}
          seconds={this.state.seconds}
        />
        <Form inline>

          <FormControl
            placeholder='Please enter minutes'
            className="Deadline-input"
            onChange={event => this.setState({enteredMinutes:event.target.value})}
          />
          <FormControl
            placeholder='Please enter seconds'
            className="Deadline-input"
            onChange={event => this.setState({enteredSeconds:event.target.value})}
          />
          <Button onClick={() => this.changeMinutesAndSeconds()}>Start!</Button>
        </Form>
      </div>
    )

  }

}

export default App;
