import React from 'react';
import './ListItem.css';

const ListItem = (props) => {
  const { user } = props;
  const { name, location, email, picture } = user;
  return (
    <div className="item">
      <div className="avatar">
        <img className="img" src={picture.thumbnail} />
      </div>
      <div className="data-container">
        <div className="name">{`${name.title} ${name.first} ${name.last}`}</div>
        <div className="address">{`${location.street.name} · ${location.street.number} ${location.city}`}</div>
        <div className="email">{`${email}`}</div>
      </div>
    </div>
  );
};

export default ListItem;
