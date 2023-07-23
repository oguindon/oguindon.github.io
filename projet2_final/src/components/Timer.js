import React from 'react';
import {useState, useEffect} from 'react';
import PauseIcon from '../img/pause.png';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCirclePlay, faCirclePause} from '@fortawesome/free-solid-svg-icons';

const Timer = ({timerEnd}) => {

    const [timer, setTimer] = useState({minutes: 15, seconds: 0})
    const [icon, setIcon] = useState(faCirclePlay);
    const [counting, setTimerState] = useState(false);


    const startingTimer = {minutes: 15, seconds: 0};

    useEffect(() => {
        if (counting) {
            let interval = setInterval(() => {
                if (timer.seconds > 0) {
                    setTimer({minutes: timer.minutes, seconds: timer.seconds - 1});
                }
                if (timer.seconds === 0) {
                    if (timer.minutes === 0) {
                        clearInterval(interval);
                    } else {
                        setTimer({minutes: timer.minutes - 1, seconds: 59});
                    }
                }
            }, 1000)
            return () => {
                clearInterval(interval);
            };
        }
    });

    const clicked = () => {
        if (counting) {
            pauseTimer();
        } else {
            if (timer.seconds > 0 || timer.minutes > 0){
                startTimer(timer);
            } else {
                startTimer(startingTimer);
            }
        }
    }

    const startTimer = (endTime) => {
        setTimer(endTime)
        setIcon(faCirclePause);
        setTimerState(true);
    }

    const pauseTimer = () => {
        setIcon(faCirclePlay);
        setTimerState(false);
    }

    const getTime = (e) => {
        return ((e.minutes > 9 ? e.minutes : '0' + e.minutes) + ':' + (e.seconds > 9 ? e.seconds : '0' + e.seconds));
    }

    return (
        <div className="timer">
            <h3>{getTime(timer)}</h3>
            <Row>
            <Col>
                <button onClick={clicked}><FontAwesomeIcon icon={icon} alt="play/pause button"/></button>
            </Col>
            </Row>
        </div>
    );
}

export default Timer;