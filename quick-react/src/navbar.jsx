import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function FitnessNavbar() {
  return (
    <Navbar 
      fixed="top" 
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}
      variant="dark"
    >
      <Container className="position-relative">
        {/* Logo - clickable to go home */}
        <Navbar.Brand href="/">
          <img
            src="/logo.svg"
            width="40"
            height="40"
            alt="Petr logo"
            style={{ cursor: 'pointer' }}
          />
        </Navbar.Brand>

      
        <div 
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '24px'
          }}
        >
          EATER ACTIVE
        </div>
      </Container>
    </Navbar>
  );
}

export default FitnessNavbar;