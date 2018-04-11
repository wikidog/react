import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = { term: '' };  // initialize the state object;
                                // outside constructor() function
                                // we use this.setState()
                                // to manipulate the state object
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
        {/* value of the input: {this.state.term} */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
    // console.log(event.target.value);
  }
}

export default SearchBar;
