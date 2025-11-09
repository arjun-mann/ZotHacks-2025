export default function InputField({field, units, value, onChange}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  

  return (
    <div>
      <div style={{ 
        display: 'flex', 
        gap: '20px', // Adds space between label and input
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div class='element-one'>
          <label htmlFor="nameInput">{field}:</label>
        </div>
        <div class='element-two' style={{backgroundColor:'rgba(2, 2, 16, 1)'}}>
          <input 
            type='text' 
            value={value}
            onChange={handleChange} 
            placeholder='Type here...'
          />
        </div>
      </div>
      
    </div>
  )
}

        // 
        // <input 
        //   type='text' 
        //   value={value}
        //   onChange={handleChange} 
        //   placeholder='Type here...'
        // />
