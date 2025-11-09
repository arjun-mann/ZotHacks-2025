import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Choice({label, options}){
    return(
        <div>
            <label>{label}:</label>
            <select name="selectedGoal">
                {options.map((item, index) => (
                    <option value={item}>{item}</option>
                ))}
            </select>
        </div>
    );
}

