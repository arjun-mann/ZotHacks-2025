import { useNavigate } from "react-router-dom";

export default function Intro() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            background: 'linear-gradient(135deg, rgb(64, 41, 82), rgb(29, 11, 42))',
        }}>
            {/* Title Section */}
            <div style={{
                textAlign: 'center',
                marginBottom: '60px'
            }}>
                <h1 style={{
                    fontSize: '3.5em',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '20px',
                    letterSpacing: '2px'
                }}>
                    EATER ACTIVE
                </h1>
                <p style={{
                    fontSize: '1.3em',
                    color: 'rgba(255, 255, 255, 0.8)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    Transform your fitness journey with personalized workout plans
                </p>
            </div>

            {/* Images Container */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '30px',
                maxWidth: '1200px',
                width: '100%',
                marginBottom: '60px',
                padding: '0 20px'
            }}>
                <div style={{
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
                
                >
                    <img 
                        src='src/assets/images/performativeMales.jpg'
                        alt="Fitness training"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>

                <div style={{
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
               
                >
                    <img 
                        src='src/assets/images/phone.jpg'
                        alt="Mobile app"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                </div>
                  <div style={{
                    overflow: 'hidden',
                    borderRadius: '20px',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <img 
                        src='src/assets/images/happystudents.png'
                        alt="Happy students"
                        style={{
                            width: '100%',
                            height: '400px',
                            objectFit: 'cover',
                            display: 'block'
                        }}
                    />
                   </div>
            </div>

            {/* CTA Button */}
            <button 
                onClick={handleClick}
                style={{
                    padding: '18px 60px',
                    fontSize: '1.2em',
                    fontWeight: 'bold',
                    color: 'white',
                    background: 'linear-gradient(135deg, #38E54D, #2ecc71)',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    boxShadow: '0 8px 25px rgba(56, 229, 77, 0.4)',
                    transition: 'all 0.3s ease',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(56, 229, 77, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(56, 229, 77, 0.4)';
                }}
            >
                Get Started
            </button>
        </div>
    );
}