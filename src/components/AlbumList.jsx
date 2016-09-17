import React from 'react';

const AlbumList = (pros) => {
  const albums = props.albums.map((album) => <li>{album.name}</li>);

  return(<ul>${albums}</ul>);
};

AlbumList.propTypes = {
  albums: React.PropTypes.array.isRequired,
};

export default AlbumList;