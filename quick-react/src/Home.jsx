import './App.css'
import Header from './Header.jsx'
import InputField from './InputField.jsx'
import Choice from './Choice.jsx'
import ContinueButton from './async.jsx'
import React, { useState } from 'react';
import Days from './Multiselect.jsx'


export default function Home(){
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const sexList = ['Rather not say', 'Female', 'Male']
    const [sex, setSex] = useState('');
    const goalList = ['General', 'Endurance', 'Weight-lifting']
    const [goal, setGoal] = useState('');
    
    const [selectedDays, setSelectedDays] = useState([]);
    

    return(
        <div>
            <Header/>
            <br />
            <InputField 
                field='Weight' 
                units='lbs'
                value={weight}
                onChange={setWeight}
            />
            <br />
            <InputField 
                field='Height' 
                units='inches'
                value={height}
                onChange={setHeight}
            />
            <br />
            <InputField 
                field='Age' 
                units='years'
                value={age}
                onChange={setAge}
            />
            <br />

            <Choice 
                label='Sex assigned at birth' 
                options={sexList}
                decision={sex}
                onChoose={setSex}
            />
            <br />
            <Choice 
                label='Your workout goal' 
                options={goalList}
                decision={sex}
                onChoose={setGoal}
            />

          
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