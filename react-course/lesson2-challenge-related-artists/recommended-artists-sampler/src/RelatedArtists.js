import React, { Component } from 'react';
import './css/App.css';

class RelatedArtists extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTrack:'',
      playing: false,

    }
  }
  render() {
    const relatedArtists = this.props.relatedArtists;
    const searchedArtist = this.props.artist;
    console.log(relatedArtists);
    return (
      <div>
        <h2>Artists Similar To {searchedArtist.name}</h2>
        <div className="RelatedArtists">
          {
            relatedArtists.map((artist, k) => {
              return (
                <div className="relatedArtist" key={k}>
                  <img
                    className="raImage"
                    src={artist.image}
                    alt={artist.name}
                  />
                  <h6>{artist.name}</h6>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default RelatedArtists;
