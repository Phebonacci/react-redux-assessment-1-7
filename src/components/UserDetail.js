import React from 'react';

const UserDetail = ({ email, job, avatar }) => {
  return (
    <div className="ui link items">
      <div className="item">
        <div className="content">
          <div className="header">{ email }</div>

          <div className="description">
            <p>{job}</p>
          </div>
        </div>

        <div className="ui right floated tiny image">
          <img alt={email} src={avatar} />
        </div>
      </div>
    </div>
  )
};

export default UserDetail;
