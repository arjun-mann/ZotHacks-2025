import InputField from './InputField.jsx'


export default function BioInputs({ age, setAge, weight, setWeight, height, setHeight }) {
  return (
    <div>
      <InputField 
        field='Age' 
        units='years'
        value={age}
        onChange={setAge}
      />
      <InputField 
        field='Weight' 
        units='lbs'
        value={weight}
        onChange={setWeight}
      />
      <InputField 
        field='Height' 
        units='inches'
        value={height}
        onChange={setHeight}
      />
    </div>

  )
}