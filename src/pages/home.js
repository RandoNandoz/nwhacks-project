import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './home.css'


export default function Home() {
    return (
       
        <Container>
        <Row>
        <Col>
          <div className="bg-light border">Plantis</div>
          <div className="bg-light border">For all your plant care needs</div>  
          <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" href='/pages/login'>Sign Up</Button>
                <Button variant="secondary" href='/pages/login'>Log In</Button>
            </ButtonGroup>
        </Col>

          <Col><img src='https://media.istockphoto.com/id/1045368942/fr/vectoriel/cr%C3%A9ation-de-feuille-verte-abstraite-logo-ic%C3%B4ne-vector-jeu-dic%C3%B4nes-de-l%C3%A9cologie-ic%C3%B4ne-eco.jpg?s=612x612&w=0&k=20&c=mSeHhuilvfCOyvj-tIwYFFqjCNkJZJWGQV_atSMBTyQ='/>
        </Col>
        </Row>
      </Container>
     
    
    )
}