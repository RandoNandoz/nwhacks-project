import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./logpage.css";
import TestPlant from '../components/test';
<<<<<<< Updated upstream
import { God } from '../components/test';
=======
//import "./DeleteTest.js";
import React from "react";
import ReactDOM from 'react-dom/client';

class DeleteTest extends React.Component {
    constructor(props) {
      super(props);
      this.state = {show: true};
    }
    delHeader = () => {
      this.setState({show: false});
    }
    render() {
      let myheader;
      if (this.state.show) {
        myheader = <TestPlant />;
      };
      return (
        <div>
        {myheader}
        <button type="button" onClick={this.delHeader}>Delete Header</button>
        </div>
      );
    }
  }
>>>>>>> Stashed changes

export default function LogPage() {
    return (
        <div className='container1 log'>
            <div class="cards">
                <h1 class="title">Plant Log</h1>
                <Button variant="primary" size="lg" id='one1'>
                    New Plant
                </Button>{' '}

                <Button variant="primary" size="lg" id='one1'>
                    Edit Plant
                </Button>{' '}

                <Button variant="primary" size="lg" id='one1'>
                    Delete Plant
                </Button>{' '}

                <div className='CardContainer'>
                    <Card style={{ width: '18rem' }} bg={"Success"}>
                        <Card.Img variant="top" src="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s" />
                        <Card.Body>
                        <Card.Title>
                          Succulent
                        </Card.Title>
                        <Card.Subtitle>
                          Name:
                        </Card.Subtitle>
                        <Button variant="primary" href='/pages/info#plant1'>More info</Button>
                        </Card.Body>
                    </Card>
                    <DeleteTest />
                    </div>
                </div>
              </div>
      
      );
}