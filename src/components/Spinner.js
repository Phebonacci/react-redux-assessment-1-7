import React from 'react';

const Spinner = ({ placeholder }) => {
  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{ placeholder }</div>
    </div>
  );
};

export default Spinner;
