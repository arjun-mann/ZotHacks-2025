import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Choice({label, options, decision}){
    const handleChange = (event) => {
        decision = event.target.value
    };
    
    return(
        <div>
            {/* This here is broken right now! */}
            <label>{label}:</label>
            <select onChange={handleChange}>
                {options.map((item, index) => (
                    <option value={item} >{item}</option>
                ))}
            </select>
            <p>you chose {decision}</p>
        </div>
    );
}

