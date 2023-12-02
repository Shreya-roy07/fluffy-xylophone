// App.js
import React, { useState } from 'react';
import './App.css';
import Certificate from './Certificate';

function App() {
   const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setStudentName(value);
    } else if (name === 'age') {
      setStudentAge(value);
    }
  };

  return (
  <div className="App">
      <header className="App-header">
        {/* Your header content goes here */}
      </header>
      <div className="input-container">
        <label>
          Name:
          <input type="text" name="name" value={studentName} onChange={handleInputChange} />
        </label>
        <label>
          Age:
          <input type="text" name="age" value={studentAge} onChange={handleInputChange} />
        </label>
      </div>
      <Certificate name={studentName} age={studentAge} />
    </div>
  );
}

export default App;
