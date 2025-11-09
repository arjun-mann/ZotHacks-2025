import InputField from './InputField.jsx'


export default function BioInputs({ weight, setWeight, height, setHeight, age, setAge }) {
  return (
    <div>
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
      <InputField 
        field='Age' 
        units='years'
        value={age}
        onChange={setAge}
      />
    </div>

  )
}