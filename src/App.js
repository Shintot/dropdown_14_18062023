import React from 'react';
import Dropdown from './Dropdown';
import './App.css';

function App() {
  const options = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ];

  return (
    <div className="App">
      <Dropdown options={options} />
    </div>
  );
}

export default App;
