import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import bookIcon from '../img/book_icon.jpg';
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";

function Books({ title, price, Type, Genre, author, rating, id, description}) {
    const navigate = useNavigate();

    const toDescription=()=>{
        navigate("/description", {state: {title: title, price: price, Type: Type, Genre: Genre, author: author, rating: rating, id: id, description: description}})
    }

    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bookIcon} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>
                        <Rating name="average-rating" value={rating} precision = {0.5} readOnly/>
                        </Col>
                    </Row>
                    <Row>
                        Author: {author}
                    </Row>
                    <Row>
                        Price: {price}
                    </Row>
                    <Row>
                        Type: {Type}
                    </Row>
                    <Row>
                        Genre: {Genre}
                    </Row>
                </Card.Text>
                <Container className='text-center'>
                    <Button variant="primary">Buy</Button>
                </Container>
                <Container className='text-center'>
                    <Button onClick={()=>{toDescription()}}>View</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Books;