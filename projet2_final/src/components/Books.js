import React from 'react';
import {useEffect, useState} from 'react';
import Dropdown from 'react-dropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import bookIcon from '../img/book_icon.jpg';
import Rating from "@mui/material/Rating";
import { Link, useNavigate } from "react-router-dom";

function Books({ title, price, Type, Genre, author, rating, id, description, hardcover_stock, paperback_stock, addToCart}) {
    const [version, setVersion] = useState([]);
    const [variantInfo, setVariantInfo] = useState();
    const navigate = useNavigate();
    const variants = ['Digital', 'Hardcover', 'Paperback']

    const options = [{digital: {name: 'digital', text: 'Digital', available: true}}, {hardcover: {name: 'digital', text: 'Digital', available: hardcover_stock !== 0 ? true : false}}, {paperback: {name: 'digital', text: 'Digital', available: paperback_stock !== 0 ? true : false}}]

    const toDescription=()=>{
        navigate("/description", {state: {title: title, price: price, Type: Type, Genre: Genre, author: author, rating: rating, id: id, description: description}})
    }

    const handleVersion = (e) => {
        setVersion(e)
    }

    useEffect(() => {
        let finalVersionArray = [];
        for (let i = 0; i < variants.length; i++){
            if (variants[i]) {
                let versionInfo = {}

                versionInfo.key = variants[i].name
                versionInfo.text = variants[i].text
                versionInfo.value = variants[i].name
                finalVersionArray.push({name: variants[i].name, text: variants.text})
            }
        }

        setVersion(finalVersionArray)
    }, [])

    const handleButtonAddCart = e => {
        e.preventDefault()
        addToCart(id, version, price)
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
                <Dropdown
                    className="sizes-drop"
                    onChange={handleVersion}
                    value={options.text}
                    fluid
                    placeholder='Select copy'
                    selection
                    options={variants}
                />
                <Container className='text-center'>
                    <Button fluid variant="primary" onClick={handleButtonAddCart}>Add to cart </Button>
                </Container>
                <Container className='text-center'>
                    <Button onClick={()=>{toDescription()}}>View</Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

export default Books;