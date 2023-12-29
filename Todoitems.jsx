// Todoitems.js (or whatever the filename is)
import React from 'react';
import Item from './Item';

const Todoitems = ({ todoitems, onDeleteClick }) => {
  return (
    <div>
      {/* Map through todoitems and render Item component for each */}
      {todoitems.map((item) => (
        <Item
     
          itemname={item.name}
          itemdate={item.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default Todoitems;
