import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Fragment>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Fragment>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
