import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchArtist: null,
      relatedArtists: [],
      query: ''
    }
  }
  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search';
    let SEARCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
    fetch(SEARCH_URL, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({searchArtist: artist});
      console.log(this.state.searchArtist);
      let RA_URL = `https://api.spotify.com/v1/artists/${artist.id}/related-artists`;
      fetch(RA_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
    })


  }
  render() {
    return (
      <div className="App">
        <div className="App-title">Recommended Artists Sampler</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Enter an artist name"
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
      </div>
    )
  }
}

export default  App;
