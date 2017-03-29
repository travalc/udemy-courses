import React, { Component } from 'react';
import './css/App.css';

class SearchedArtist extends Component {
  render() {
    let artist = {
      name: '',
      genres: [],
      images: [{url:''}]
    }
    artist = this.props.artist !== null ? this.props.artist : artist;
    return (
      <div className="SearchedArtist">
        <img
          alt={artist.name}
          src={artist.images[0].url}
        />
        <h2 className="searchedArtistName">{artist.name}</h2>
        <p>Genres</p>
        <ul className="genreList">
          {
            artist.genres.map((genre, k) => {
              return (
                <li key={k}>{genre}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default SearchedArtist;
