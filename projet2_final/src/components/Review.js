import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import StarBox from './StarBox';
import '../App.css';

function Review({ name, rating, message }) {
    return(
    <div className="container-fluid basic-box">
        <Row>
            <div className="container-fluid review-name">
                <Row>
                <Col>{name}</Col>
                <Col>{<StarBox {...rating}/>}</Col>
                </Row>
            </div>
        </Row>
        <Row><div className="review-text">{message}</div></Row>
    </div>
    
    );
}

export default Review;