import React from 'react';

import { getCountryFlagImg } from '../lib/utils';

import UserDetail from './UserDetail';

const FlagCard = ({ user }) => {
  return (
    <div className="ui fluid card">
      <div className="content">
        <UserDetail
          email={user.email}
          job={user.jobTitle}
          avatar={user.avatar}
        />

        <div class="ui divider"></div>

        <div class="item">
          <div class="ui left floated tiny image">
            <img
              alt={user.countryCode}
              src={getCountryFlagImg(user.countryCode)}
            />
          </div>

          <div class="middle aligned content">
            {user.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlagCard;
