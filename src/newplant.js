function newPlant() {
    return (
        <Card style={{ width: '18rem' }} bg={"Success"}>
                        <Card.Img variant="top" src="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s" />
                        <Card.Body>
                        <Card.Title>
                            {Card.name}
                        </Card.Title>
                        <Card.Subtitle>
                            {Card.nickname}
                        </Card.Subtitle>
                        <Button variant="primary" href={Card.link}>More info</Button>
                        </Card.Body>
                    </Card>
    )
}

export default newPlant