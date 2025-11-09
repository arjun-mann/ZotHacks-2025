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
    const [selectedDays, setSelectedDays] = useState([]);
    const sexList = ['Rather not say', 'Female', 'Male']
    const [sex, setSex] = useState(sexList[0]);
    const goalList = ['General', 'Endurance', 'Weight-lifting']
    const [goal, setGoal] = useState(goalList[0]);
    

    return(
        <div>
            <Header/>
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
            />
            <Choice 
                label='Your workout goal' 
                options={goalList}
                decision={goal}
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