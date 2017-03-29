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
    const SA_CLASSES = "SearchedArtist col-md-6"
    return (
      <div className={SA_CLASSES}>
          <h4 className="searchedArtistName">{artist.name}</h4>
          <div className="imageDiv">
            <img
              alt={artist.name}
              src={artist.images[0].url}
              />
          </div>
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
