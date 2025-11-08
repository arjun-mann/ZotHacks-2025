import InputField from './InputField.jsx'

export default function BioInputs() {
  return (
    <div>
      <InputField field='Age' units='years'/>
      <InputField field='Weight' units='lbs'/>
      <InputField field='Height' units='inches'/>
    </div>
  )
}