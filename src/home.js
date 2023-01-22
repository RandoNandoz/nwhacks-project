import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css'


export default function Home() {
    return (
       <div className='background'>

<div className='container home'>

<Row>
<Col className='col'>
<div className="title" id='one'>Plantis</div>
<div className="subtitle">For all your plant care needs</div>  
<ButtonGroup aria-label="Basic example" id='buttons'>
        <Button variant="light" href='/pages/login' size="lg">Sign Up</Button>
        <Button variant="light" href='/pages/login' size="lg">Log In</Button>
    </ButtonGroup>
</Col>


</Row>
</div>
       </div>
        

        
       
      
     
    
    )
}