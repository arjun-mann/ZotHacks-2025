import './App.css'
import InputField from './InputField.jsx'
import Choice from './Choice.jsx'
import ContinueButton from './async.jsx'
import React, { useState, useEffect } from 'react';
import Days from './Multiselect.jsx'
import FitnessNavbar from './navbar.jsx'


export default function Home(){
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    const sexList = ['Rather not say', 'Female', 'Male']
    const [sex, setSex] = useState('');
    const goalList = ['General', 'Endurance', 'Weight-lifting']
    const [goal, setGoal] = useState('');
    
    const [selectedDays, setSelectedDays] = useState([]);
    
    useEffect(() => {
        // Trigger animations after a short delay to ensure DOM is ready
        const timer = setTimeout(() => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('animate-visible');
                }, index * 100); // 100ms delay between each element
            });
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    const handleContinue = () => {
        const userData = {
            age,
            weight,
            height,
            sex,
            goal,
            selectedDays
        };

        // Navigate to Gym.jsx with collected input
        navigate("/gym-choice", { state: userData });
    };

    return(
        <div> 
            <FitnessNavbar />
            <div style={{ paddingTop: '70px'}}>

                <img src='src/assets/images/aboutyou.png'></img>

                <div className="animate-on-scroll">
                <br />
                <InputField 
                    field='Weight' 
                    units='lbs'
                    value={weight}
                    onChange={setWeight}
                />
                </div>

                <div className="animate-on-scroll">
                <br />
                <InputField 
                    field='Height' 
                    units='inches'
                    value={height}
                    onChange={setHeight}
                />
                </div>

                <div className="animate-on-scroll">
                <br />
                <InputField 
                    field='Age' 
                    units='years'
                    value={age}
                    onChange={setAge}
                />
                </div>

                <div className="animate-on-scroll">
                <br />
                <Choice 
                    label='Sex assigned at birth' 
                    options={sexList}
                    decision={sex}
                    onChoose={setSex}
                />
                </div>

                <div className="animate-on-scroll">
                <br />
                <Choice 
                    label='Your workout goal' 
                    options={goalList}
                    decision={sex}
                    onChoose={setGoal}
                />
                </div>

                <div className="animate-on-scroll">
                <Days
                selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />
                </div>
                
                <div className="animate-on-scroll">
                <br/>
                <ContinueButton 
                    age= {age}
                    weight = {weight}
                    height = {height}
                    sex = {sex}
                    goal = {goal}
                    selectedDays = {selectedDays}
                    onClick={handleContinue}
                />
                </div>
            </div>
        </div>
    );
}