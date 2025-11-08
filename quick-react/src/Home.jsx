import './App.css'
import Header from './Header.jsx'
import BioInputs from './BioInputs.jsx'
import Goals from './dropdown.jsx'
import ContinueButton from './async.jsx'
import React, { useState } from 'react';


/*
age = weight = height = ''
function sendData() {
    console.log('Age: ' + age + '\tweight: ' + weight + '\theight: ' + height)
}*/

export default function Home(){
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');

    return(
        <div>
            <Header/>
            <BioInputs
                age={age}
                setAge={setAge}
                weight={weight}
                setWeight={setWeight}
                height={height}
                setHeight={setHeight}
            />
            <Goals/>
            <br/>
            <ContinueButton />
        </div>
    );
}