import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Choice({label, options, decision, onChoose}){
    const handleChange = (event) => {
        onChoose(event.target.value)
    };
    
    return(
        <div>
            <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <label>{label}:</label>
                <select 
                    onChange={handleChange} 
                    defaultValue=""
                    style={{backgroundColor:'#ddf'}}
                >
                    <option value='' disabled>-- Please Select --</option>
                    {options.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

