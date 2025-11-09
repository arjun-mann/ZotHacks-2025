import { useNavigate } from "react-router-dom";

export default function Intro(){
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }

    return(
        <div>
            <div style={{ 
                display: 'flex', 
                gap: '20px', // Adds space between label and input
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <img src='src/assets/images/performativeMales.jpg'></img>
                <img src='src/assets/images/phone.jpg'></img>
            </div>
            <button onClick={handleClick}>
                Go to next page
            </button>
        </div>
    );
}