import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import StarBox from './StarBox';
import '../App.css';
import Rating from "@mui/material/Rating";

function Review({ name, rating, message }) {
    return(
    <div className="container-fluid basic-box">
        <Row>
            <div className="container-fluid review-name">
                <Row>
                <Col>{name}</Col>
                <Col>{<Rating name="user-rating" value={rating} precision = {0.5} readOnly/>}</Col>
                </Row>
            </div>
        </Row>
        <Row><div className="review-text">{message}</div></Row>
    </div>
    
    );
}

export default Review;