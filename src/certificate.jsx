// Certificate.js
import React from 'react';

const Certificate = ({ name, school_name ,class_no}) => {
  return (  
      <div className="student-info">
        <p> {name}</p>
        <p> {school_name}</p>
        <p>{class_no}</p>
      </div>
  );
};

export default Certificate;
