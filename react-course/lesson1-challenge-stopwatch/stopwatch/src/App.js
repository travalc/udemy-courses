import React, { Component } from 'react';
import Clock from './Clock';
import './App.css'
import { Form, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      enteredMinutes: 0,
      enteredSeconds: 0,
      isCounting: true,
      paused: false,
    }
  }

  changeMinutesAndSeconds() {
    this.setState({paused: false});
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
    if (this.state.paused === false) {
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
    else {
      let currentMinutes = this.state.minutes;
      let currentSeconds = this.state.seconds;
      this.setState({minutes: currentMinutes, seconds: currentSeconds})
      console.log(this.state);
    }

  }

  componentDidMount() {
    if (this.state.paused === false) {
      setInterval(() => this.getTimeUntilZero(), 1000);
    }
    else {

    }

  }

  togglePause() {
    if (this.state.paused === false) {
      this.setState({paused: true});
    }
    else {
      this.setState({paused: false});
    }

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
          <Button onClick={() => this.togglePause()}>
            {
              this.state.paused === true
              ? <span>&#9654;</span>
              : <span>||</span>
            }
          </Button>
        </Form>
      </div>
    )

  }

}

export default App;
