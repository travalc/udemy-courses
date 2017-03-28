import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  search() {

  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Recommended Artists Sampler</div>
        <FormGroup>
          <FormControl
            type="text"
            placeholder="Enter an artist name"
          />
          <InputGroup.Addon>
            <Glyphicon glyph="search"></Glyphicon>
          </InputGroup.Addon>
        </FormGroup>
      </div>
    )
  }
}

export default  App;
