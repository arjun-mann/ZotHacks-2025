import GymHeader from './assets/images/darkheader.jpg'
export default function Header(){
    return(
        <div style ={{
            position: 'relative',
            height: '300px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
        
            <img src={GymHeader} 
            alt="header" 
            style={{
                position:'absolute',
                top: 0,
                left:0,
                width: '100%',
                height:'100%',
                objectFit: 'cover',
                zIndex: 1
            }}
            />
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
                zIndex: 2
            }}></div>
            
        
            <h1 style={{
                position: 'relative',
                zIndex: 3,
                fontSize: '3.5rem',
                fontWeight: '900',
                color: 'white',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
                letterSpacing: '0.05em',
                margin: 0,
                textTransform: 'uppercase'
            }}>
                EaterActive
            </h1>
    
        
        </div>
    );
}