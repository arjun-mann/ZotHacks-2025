import './App.css'
import Header from './Header.jsx'
import InputField from './InputField.jsx'
import Choice from './Dropdown.jsx'
import ContinueButton from './async.jsx'
import React, { useState } from 'react';
import Days from './Multiselect.jsx'


export default function Home(){
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const goalList = ['Endurance', 'Weight-lifting', 'General']

    return(
        <div>
            <Header/>
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

            <Choice options={goalList}/>
          
            <Days
            selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
            />

            <br/>
            <ContinueButton 
                age= {age}
                weight = {weight}
                height = {height}
                selectedDays = {selectedDays}
                // goal = {goal}
            />
        </div>
    );
}