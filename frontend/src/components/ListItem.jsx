import React, {useState} from 'react';

const ListItem = ({name, car, coef, index, onClick, isActive}) => {
  return (
    <div onClick={onClick} className={`list-item ${isActive ? 'active' : ''}`}>
      <div className="index">{index}</div>
      <div className="name">{name}</div>
      <div className="car">{car}</div>
      <div className="coef">{coef}</div>
    </div>
  );
};

export default ListItem;
