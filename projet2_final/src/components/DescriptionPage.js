import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Review_container from './Review_container';
import { review_data } from './Review_data.js';
import picture from '../img/book_icon.jpg';
import { useLocation } from 'react-router-dom';

function DescriptionPage() {
    const location = useLocation();
    //const elements = review_data.map(x => x);
    const reviews = review_data.find(elem => elem.id === location.state.id).reviews;
    console.log(reviews);
    return(<>
        <Row><h1>{location.state.title}</h1><h4> by {location.state.author}</h4></Row>
        <Row>
            <Col>
                <img src={picture} alt="" width="100%"></img>
            </Col>
            <Col>
                <div className="scroll-col"><p>{location.state.description}</p></div>
            </Col>
            <Col>
                <Review_container data={reviews}/>
            </Col>
        </Row>
    </>
    );
}

export default DescriptionPage;