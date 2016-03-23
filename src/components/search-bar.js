import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  searchTermChanged(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar col-md-6 col-md-offset-3">
        <input
          value={ this.state.term }
          onChange={ event => this.searchTermChanged(event.target.value) }
          className="form-control"
          autoFocus
        />
      </div>
    );
  }
}

export default SearchBar;
