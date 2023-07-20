import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import picture from '../img/stackobooks.png';
import "../App.css";

const Home = () => {
    const english_version = [
        "Largest book selection in Canada!",
        "From thrilling epics to Grandma's favourite cookbook, we have it all!",
        "Paperback was founded with the sole purpose of fulfilling the world's reading needs at the click of a button!",
    ]
    const french_version = [
        "La plus grande sélection de livres au Canada!",
        "Des romans les plus intimes aux bandes dessinées les plus farfellues, nous les avons!",
        "Paperback a été fondé pour offrir une séléction incroyable de livres.",
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }

    return (  
        <div className="homepage">
            <Container>
                <div class="jumbotron">
                    <Row>
                        <Col xs="6">
                            <h1> {active_language[0]} </h1>
                            <p> {active_language[1]} </p>
                            <p>{active_language[2]} </p>
                        </Col>
                        <Col xs="6">
                            <img src={picture} alt="" width="100%"></img>
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
}
 
export default Home;