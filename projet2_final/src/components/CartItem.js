import React from 'react';
import {useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import bookIcon from '../img/book_icon.jpg';
import { useNavigate } from "react-router-dom";

function CartItem({ title, price, Type, Genre, author, rating, id, description, version, removeFromCart}) {
    const navigate = useNavigate();

    const toDescription=()=>{
        navigate("/description", {state: {title: title, price: price, Type: Type, Genre: Genre, author: author, rating: rating, id: id, description: description}})
    }

    useEffect(() => {
        
    }, [])

    const handleButtonRemoveCart = () => {
        removeFromCart(id)
    }

    return (
        <Card className='m-2' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={bookIcon} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <Col>
                        <Row>Author: {author}</Row>
                        <Row>Version: {version.text}</Row>
                    </Col>
                    <Col>
                        Price: {price}
                    </Col>
                </Card.Text>
                <Container className='wrap'>
                    <Button fluid variant="primary" onClick={handleButtonRemoveCart}>Remove from cart </Button>
                </Container>
                <Container className='wrap'>
                    <Button onClick={()=>{toDescription()}}>View</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default CartItem;