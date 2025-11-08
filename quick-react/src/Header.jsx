import GymHeader from './assets/images/gym.jpg'
export default function Header(){
    return(
        <div class="h-14 bg-linear-to-t from-sky-500 to-indigo-500">
            <img src={GymHeader} alt="header" />
            <h1 class = "mb-4 text-3xl font-extrabold leading-none tracking-tight subpixel-antialiased"> Personal trainer
            </h1>
        </div>
        
        
    );
}