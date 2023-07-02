import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import bookIcon from '../img/book_icon.jpg'
import StarBox from './StarBox.js'

function Books({ title, price, type, genre, author, rating}) {
    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bookIcon} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Row>
                        <Col>Author:</Col>
                        <Col>{author}</Col>
                    </Row>
                    <Row>
                        <Col>Price:</Col>
                        <Col>{price}</Col>
                    </Row>
                    <Row>
                        <Col>Type:</Col>
                        <Col>{type}</Col>
                    </Row>
                    <Row>
                        <Col>Genre:</Col>
                        <Col>{genre}</Col>
                    </Row>
                    <Row>
                        <StarBox {...rating}/>
                    </Row>
                </Card.Text>
                <Container className='text-center'>
                    <Button variant="primary">Buy</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Books;