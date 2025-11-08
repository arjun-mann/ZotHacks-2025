import './App.css'
import Header from './Header.jsx'
import BioInputs from './BioInputs.jsx'
import Goals from './dropdown.jsx'


export default function Home(){
    return(
        <div>
            <Header/>
            <BioInputs/>
            <Goals/>
            <br/>
            <button>Continue</button>
        </div>
    );
}