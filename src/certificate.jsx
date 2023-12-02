import React from 'react';

const Certificate = ({ name, age }) => {
  return (
    <div className="certificate">
      <h1>Certificate of Achievement</h1>
      <div className="student-info">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Certificate;
