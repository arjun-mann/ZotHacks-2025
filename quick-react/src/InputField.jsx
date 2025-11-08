import React, { useState } from 'react';

export default function InputField(props) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  

  return (
    <div>
      <label htmlFor="nameInput">{props.field}: </label>
      <input 
        type='text' 
        value={inputValue} 
        onChange={handleChange} 
        placeholder='Type here...'
      />
      <p>Your {props.field} is {inputValue} {inputValue != '' ? props.units : ''}</p>
    </div>
    
  )
}