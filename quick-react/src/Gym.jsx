import GymOption from './GymOption.jsx'

export default function Gym(){
    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            width: "100%",
            padding: "20px"}}>
            <GymOption
                imageUrl="/src/assets/images/arc.jpg"
                text='Anteater Recreation Center'
                tintColor='rgba(84, 20, 20, 0.4)'
            />
            <GymOption
                imageUrl="/src/assets/images/mesa_court.jpg"
                text='Mesa Court'
                tintColor='rgba(40, 26, 93, 0.4)'
            />
            <GymOption
                imageUrl="/src/assets/images/me_gym.jpg"
                text='Middle Earth'
                tintColor='rgba(8, 53, 10, 0.4)'
            />
            <GymOption
                imageUrl="/src/assets/images/pv.jpg"
                text='Plaza Verde'
                tintColor='rgba(71, 63, 13, 0.4)'
            />
            <GymOption
                imageUrl="/src/assets/images/vdc.jpg"
                text='Vista de Campo'
                tintColor='rgba(72, 14, 69, 0.4)'
            />
            <GymOption
                imageUrl="/src/assets/images/vdcn.jpg"
                text='Vista de Campo Norte'
                tintColor='rgba(17, 81, 87, 0.4)'
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