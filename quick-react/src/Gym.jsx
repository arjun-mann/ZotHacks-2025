import GymOption from './GymOption.jsx'

export default function Gym(){
    return(
        <div  style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            padding: '40px',
            maxWidth: '1600px',
            margin: '0 auto'
        
        }}>
            <GymOption
                imageUrl="./assets/images/arc.jpg"
                text='Anteater Recreation Center'
                tintColor='rgba(255,0,0, 0.3)'
            />
            <GymOption
                imageUrl="./assets/images/me_gym.jpg"
                text='Middle Earth'
                tintColor='rgba(0,255,0,0.3)'
            />
            <GymOption
                imageUrl="./assets/images/mesa_court.jpg"
                text='Mesa Court'
                tintColor='rgba(0,0,255,0.3)'
            />
            <GymOption
                imageUrl="./assets/images/pv.jpg"
                text='Plaza Verde'
                tintColor='rgba(255,255,0,0.3)'
            />
            <GymOption
                imageUrl="./assets/images/vdc.jpg"
                text='Vista del Campo'
                tintColor='rgba(255,0,255,0.3)'
            />
            <GymOption
                imageUrl="./assets/images/vdcn.jpg"
                text='Vista del Campo Norte'
                tintColor='rgba(0,255,255,0.3)'
            />
        </div>
    );
}