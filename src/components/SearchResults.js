import React from 'react';
import PropTypes from 'prop-types';

import FlagCard from './FlagCard';

const SearchResults = ({ results }) => {
  const noResultsStyle = { margin: '2em 0' };
  return (
    <React.Fragment>
      { results && results.length > 0 ?
        <div  className="ui cards">{ results.map(result => <FlagCard key={result.email} user={result} />) }</div> :
        <div style={noResultsStyle}>No results!</div> }
    </React.Fragment>
  );
};

export default SearchResults;
