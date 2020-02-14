import React from 'react';

const SearchBar = ({ label, placeholder, onSearch }) => {
  const onSubmit = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="ui cards">
      <div className="ui fluid card">
        <div className="content">
          <div className="ui small header">{label}</div>

          <div className="ui fluid input">
            <input type="text" placeholder={placeholder} onChange={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  )
};

export default SearchBar;
