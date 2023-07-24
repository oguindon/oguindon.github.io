import React from 'react';
import {useEffect, useState} from 'react';
import CartItem from './CartItem.js';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';
import { data } from "./Books_data.js"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";


function Cart({cart, removeFromCart}) {
    const navigate = useNavigate();
    const cartElements = cart.map(x => data.find(x.id))

    const english_version = [
        "Error!", "The cart is not currently available due to technical difficulties."
    ]
    const french_version = [
        "Erreur!", "Le panier n'est pas disponnible à cause de problèmes techniques."
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (<Container>
                <div class="jumbotron">
                    <Row>
                        <Col xs="6">
                            <h1> {active_language[0]} </h1>
                            <br></br>
                            <p> {active_language[1]} </p>
                        </Col>
                        <Col xs="6">
                            <Container className='d-flex flex-wrap'>
                                {
                                    cartElements.map(y => <CartItem{...y} removeFromCart={removeFromCart} version={cart.find(e => e.id == y.id).data.version}/>)
                                }
                            </Container>
                        </Col>
                    </Row>
                </div>
            </Container>
    );
}

export default Cart;