import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./logpage.css";

export default function LogPage() {
    return (
      <div class="cards">
      <h1 class="title">
					Plant Log
				</h1>
            <Card style={{ width: '18rem' }}
            bg={"Success"}>
            <Card.Img variant="top" src="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s" />
            <Card.Body>
              <Card.Title>
                Succulent
              </Card.Title>
              <Card.Subtitle>
                Name:
              </Card.Subtitle>
              <Button variant="primary">More info</Button>
            </Card.Body>
          </Card>
          </div>
      );
}