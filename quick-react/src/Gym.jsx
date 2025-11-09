import GymOption from './GymOption.jsx'

export default function Gym(){
    return(
        <div>
            <GymOption
                imageUrl=
                text='Anteater Recreation Center'
                tintColor='rgba(255,0,0, 0.3)'
            />
            <GymOption
                imageUrl='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.instagram.com%2Fp%2FCNJXso6HKlh%2F&psig=AOvVaw2H8Sbj2kqh0EpEz_T7wNtW&ust=1762724137728000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCLCI7qHB45ADFQAAAAAdAAAAABAE'
                text='Middle Earth'
                tintColor='rgba(0,255,0,0.3)'
            />
        </div>
    );
}