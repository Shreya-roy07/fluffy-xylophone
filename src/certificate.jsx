// Certificate.js
import React from 'react';
import './Certificate.css';

const Certificate = ({ name, age }) => {
  return (
    <div className="certificate">
      <h1>Certificate of Achievement</h1>
      <div className="student-info">
        <p className="name-value">{name}</p>        
        <p className="age-value">{age}</p>
      </div>
    </div>
  );
};

export default Certificate;
