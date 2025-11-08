import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Goals(){
    return(

       <select name="selectedGoal">
        <option value="action-1">Endurance</option>
        <option value ="action-2">Weight-lifting</option>
        <option value = "action-3">General</option>
       </select>
    );
}

