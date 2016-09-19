import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.jsx';
import AlbumList from './components/AlbumList.jsx';
import * as musicApi from './api/musicApi.js';

class App extends React.Component {
  constructor() {
    super();

    this.state = ({
      albums: []
    });

    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
  }

  getAlbums(artist) {
    musicApi.getAlbums(artist, this.processAlbums);
  }

  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items
    });
  }

  render() {
    return (
      <div>
        <SearchBar getAlbums={this.getAlbums} />
        <AlbumList albums={this.state.albums} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('container')
);