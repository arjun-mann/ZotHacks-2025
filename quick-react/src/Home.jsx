import './App.css'
import Header from './Header.jsx'
import BioInputs from './BioInputs.jsx'
import Goals from './dropdown.jsx'
import ContinueButton from './async.jsx'


/*
age = weight = height = ''
function sendData() {
    console.log('Age: ' + age + '\tweight: ' + weight + '\theight: ' + height)
}*/

export default function Home(){
    return(
        <div>
            <Header/>
            <BioInputs />
            <Goals/>
            <br/>
            <ContinueButton />
        </div>
    );
}