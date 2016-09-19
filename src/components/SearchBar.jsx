import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.hanldeInputChange = this.hanldeInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  hanldeInputChange(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.getAlbums(this.state.searchTerm);
    }
  }

  render() {
    return <input onChange={this.hanldeInputChange} onKeyPress={this.handleKeyPress} />;
  }
}

SearchBar.propTypes = {
  getAlbums: React.PropTypes.func.isRequired
};

export default SearchBar;