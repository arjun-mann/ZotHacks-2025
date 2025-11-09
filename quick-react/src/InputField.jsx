export default function InputField({field, units, value, onChange}) {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  

  return (
    <div>
      <label htmlFor="nameInput">{field}:</label>
      <input 
        type='text' 
        value={value}
        onChange={handleChange} 
        placeholder='Type here...'
      />
    </div>
    
  )
}