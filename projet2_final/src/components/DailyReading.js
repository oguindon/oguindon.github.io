import React from 'react';
import Timer from './Timer.js';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const DailyReading = () => {
    const timerEnd = '15:00';

    return (
        <div>
            <Row>
            <Col><Timer {...timerEnd} /></Col>
            </Row>
        </div>
    );
}

export default DailyReading;