import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Book from './Books';
import Review_container from './Review_container';
import { review_data } from './Review_data.js';
import picture from '../img/book_icon.jpg';

function DescriptionPage() {
    return(<>
        <Row><h1>Title</h1></Row>
        <Row>
            <Col>
                <img src={picture} alt="" width="100%"></img>
            </Col>
            <Col>
                <div className="scroll-col"><p>description of stuff</p></div>
            </Col>
            <Col>
                <Review_container data={review_data}/>
            </Col>
        </Row>
    </>
    );
}

export default DescriptionPage;