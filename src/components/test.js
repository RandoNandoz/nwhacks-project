import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";


export class TestPlant extends Component{
    constructor(props){
        super(props)
        const NAMES = ["Succulent", "Chinese Money Plant", "Spider Plant", "Aloe Vera", "Snake Plant"];
        const NICKNAMES = ["Ron", "Bon", "Con", "Don", "Lon"];
        const IMAGES = ["https://www.ikea.com/ca/en/images/products/fejka-artificial-potted-plant-with-pot-indoor-outdoor-succulent__0614211_pe686835_s5.jpg?f=s", 
        "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/at%2Farchive%2F5e10897d140daa69e35e3d6600699432f0e39ceb", 
        "https://cdn.shopify.com/s/files/1/0210/9472/products/IMG_9675_649fa94f-e955-4393-a2f6-c65d2081aa95.jpg?v=1653514453", 
        "https://www.ikea.com/ca/en/images/products/aloe-vera-potted-plant-aloe__67410_pe181254_s4.jpg", 
        "https://www.ikea.com/ca/en/images/products/sansevieria-trifasciata-potted-plant-mother-in-laws-tongue__0908898_pe676659_s5.jpg"];
        const LINKS = ["/pages/info#plant1", "/pages/info#plant2", "/pages/info#plant3", "/pages/info#plant4", "/pages/info#plant5"];
        let profile = Math.floor(Math.random() * 5);

        this.state = {
            name: NAMES[profile],
            nickname: NICKNAMES[profile],
            image: IMAGES[profile],
            links: LINKS[profile]
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
        <Card.Img variant="top" src={this.state.image} />
        <Card.Body>
        <Card.Title>
            {this.state.name}
        </Card.Title>
        <Card.Subtitle>
            {this.state.nickname}
        </Card.Subtitle>
        <Button href={this.state.links}>More info</Button>
        </Card.Body>
    </Card>)
    }
}

export default TestPlant