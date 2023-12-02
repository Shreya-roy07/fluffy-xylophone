// App.js
import React, { useState } from 'react';
import './App.css';

const Certificate = ({ name, school_name,class_no }) => {
  return ( 
      <div >
        <p className="name"> {name}</p>
        <p className="school_name"> {school_name}</p>
        <p className="class"> {class_no} </p>
      </div> 
  );
   
};

function App() {
  const [studentName, setStudentName] = useState('Shreya Roy');
  const [studentSchool, setStudentSchool] = useState('Loyola high school');
  const [studentClass, setStudentClass] = useState('12');

  return (
    <div className="App">
      <Certificate name={studentName} school_name={studentSchool} class_no = {studentClass} />
    </div>
  );
}

export default App;
