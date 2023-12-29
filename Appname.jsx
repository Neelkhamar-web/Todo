import React, { useState } from 'react';

const Appname = ({ onnewitem }) => {
  const [itemname, setitemname] = useState('');
  const [itemdate, setitemdate] = useState('');

  const handlename = (event) => {
    setitemname(event.target.value);
  };

  const handledate = (event) => {
    setitemdate(event.target.value);
  };

  const handlebuttonchange = () => {
    onnewitem(itemname, itemdate);
    setitemname("")
    setitemdate("")

  };

  return (
    <div className="row">
      <div className="col-6">
        <input placeholder="Enter text" onChange={handlename} />
      </div>
      <div className="col-4">
        <input type="date" placeholder="Select date" onChange={handledate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          onClick={handlebuttonchange}
          className="btn btn-primary"
        >
          Primary
        </button>
      </div>
    </div>
  );
};

export default Appname;
