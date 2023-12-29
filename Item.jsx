// Item.js (or whatever the filename is)
import React from 'react';

const Item = ({ itemname, itemdate, onDeleteClick }) => {
  return (
    <div className="row mt-2">
      <div className="col-6">{itemname}</div>
      <div className="col-4">{itemdate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-primary" onClick={() => onDeleteClick(itemname)}>
          DELETE
        </button>
      </div>
    </div>
  );
};

export default Item;
