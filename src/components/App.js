import React from 'react';
import { findUser } from '../data/users';

import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import Spinner from './Spinner';

class App extends React.Component {
  static style = { padding: '2em 0' };
  state = { searchResults: [], searching: false };

  findUserByEmail = async (email) => {
    this.setState({ searchResults: [], searching: true });
    const searchResults = await findUser(email);
    this.setState({ searchResults, searching: false });
  }

  render() {
    const { searchResults } = this.state;

    return (
      <div className="ui main container" style={App.style}>
        <SearchBar
          label="Search by Email"
          placeholder="Email to search..."
          onSearch={this.findUserByEmail}
        />

        <div>
          { !!this.state.searching && <Spinner placeholder="Loading..." /> }
          { !this.state.searching && <SearchResults results={searchResults} /> }
        </div>
      </div>
    )
  }
};

export default App;
