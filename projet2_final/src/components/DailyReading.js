import React from 'react';
import Timer from './Timer.js';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/Container';

const DailyReading = () => {
    const english_version = [
        "Daily Reading", "To help get back into the spirit of reading, Paperback has started a program to incetivise wannabe readers to read 15 minutes a day!",
        "Its simple! Just start the timer and get to reading! Once the timer has run out, claim a 10% discount on your next purchase!"
    ]
    const french_version = [
        "Lecture Quotidienne", "Pour aider à revigorer l'esprit de la lecture, Paperback  a créé un program pour motiver les lecteurs aspirants à lire 15 minutes par jour!",
        "C'est facile! Simplement démarrer le chronomètre et commencer à lire! Une fois que le temps s'est écroullé, réclamez un rabais de 10% sur votre prochain achat!"
    ]

    var active_language = english_version;
    if (localStorage.getItem('language') == 'fr') {
        active_language = french_version;
    }
    
    return (
        <div>
             <Container>
                <div class="jumbotron">
                    <Row>
                        <Col xs="6">
                            <h1> {active_language[0]} </h1>
                            <br></br>
                            <p> {active_language[1]} </p>
                            <p>{active_language[2]} </p>
                        </Col>
                        <Col xs="6"><Timer/></Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default DailyReading;