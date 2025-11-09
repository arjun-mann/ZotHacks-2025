import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Choice(options){
    return(

        <select name="selectedGoal">
            {/* {options.map((item, index) => (
                <option value="action-1">{item}</option>
            ))} */}

            <option value="action-1">{options[0]}</option>
            <option value ="action-2">{options[1]}</option>
            <option value = "action-3">{options[2]}</option>

            <option value = "action-1">opt a</option>
            <option value = "action-2">opt b</option>
            <option value = "action-3">opt c</option>
        </select>
    );
}

