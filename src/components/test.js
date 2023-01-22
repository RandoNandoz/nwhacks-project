import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

export class TestPlant extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: 'Succulent',
            nickname: 'Ron',
            link: '/pages/info#plant1'
        }


        

        console.log('lifecycle constructor')

        
    }
    
    static getDerivedStateFromProps(props, state){

        console.log('lifecycle getDerived')

        return null
    }

    render(){
        console.log('lifecycle render')
        return ( <Card style={{ width: '18rem' }} bg={"Success"}>
        <Card.Img variant="top" src="https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s" />
        <Card.Body>
        <Card.Title>
            {this.state.name}
        </Card.Title>
        <Card.Subtitle>
            {this.state.nickname}
        </Card.Subtitle>
        <Button variant="primary" href={this.link}>More info</Button>
        </Card.Body>
    </Card>)
    }
}

export default TestPlant