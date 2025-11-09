import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Choice({label, options, decision, onChoose}){
    const handleChange = (event) => {
        onChoose(event.target.value)
    };
    
    return(
        <div>
            {/* This here is broken right now! */}
            <label>{label}:</label>
            <select onChange={handleChange} defaultValue="">
                <option value='' disabled>-- Please Select --</option>
                {options.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

