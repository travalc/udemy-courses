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
      </div>
    )
  }
}

export default RelatedArtists;
