import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.hanldeInput = this.hanldeInput.bind(this);
  }

  hanldeInput(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }

  render() {
    return <input onChange={this.hanldeInput} />;
  }
}

export default SearchBar;