import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css'


export default function Home() {
    return (
       
        
        <Row>
        <Col className='col'>
          <div className="title">Plantis</div>
          <div className="subtitle">For all your plant care needs</div>  
          <ButtonGroup aria-label="Basic example" id='buttons'>
                <Button variant="secondary" href='/pages/login'>Sign Up</Button>
                <Button variant="secondary" href='/pages/login'>Log In</Button>
            </ButtonGroup>
        </Col>

          <Col className='col'><img src='https://cdn.discordapp.com/attachments/1066426699669057737/1066537772434858096/image.png' height={300}/>
        </Col>
        </Row>
      
     
    
    )
}