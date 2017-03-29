import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import SearchedArtist from './SearchedArtist';
//import RelatedArtists from './RelatedArtists';
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
    const ALBUM_URL = 'https://api.spotify.com/v1/artists/';
    let artistArray = [];
    let search_url = `${BASE_URL}?q=${this.state.query}&type=artist&limit=1`;
    fetch(search_url, { //Get information for searched artist
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      const artist = json.artists.items[0];
      this.setState({searchArtist: artist});
      let RA_URL = `https://api.spotify.com/v1/artists/${artist.id}/related-artists`;
      fetch(RA_URL, { //get information on related artists
        method: 'GET'
      })
      .then(response => response.json())
      .then(json => {

        json.artists.forEach(item => { //get top track for each artist
          let image = item.images[0].url;
          let name = item.name;
          var topTrack;
          let ra_album_url = `${ALBUM_URL}${item.id}/top-tracks?country=US&`;
          fetch(ra_album_url, {
            method: 'GET'
          })
          .then(response => response.json())
          .then(json => {
            topTrack = json.tracks[0];
            let relatedArtist = {
              name: name,
              image: image,
              topTrack: topTrack
            };
            artistArray.push(relatedArtist);
            if (artistArray.length === 20) {
              this.setState({relatedArtists: artistArray});
              console.log(this.state);
            }

          })

        })

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

        {
          this.state.searchArtist !== null
          ?
            <div>
              <SearchedArtist
                artist = {this.state.searchArtist}
              />
            </div>
          : <div></div>
        }
        {
          //this.state.relatedArtists !== null
          //?
            //<div>
              //<RelatedArtists
                //artists = {this.state.relatedArtists}
              ///>
            //</div>
          //: <div></div>
        }

      </div>
    )
  }
}

export default  App;
