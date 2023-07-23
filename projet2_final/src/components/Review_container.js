import React from 'react';
import {useState} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Review from './Review';
import Row from 'react-bootstrap/esm/Row';
import "../App.css";

function Review_container({ data }) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleChange_message = (event) => {
        setMessage(event.target.value);
    };

    const handleChange_name = (event) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        data.push({name: name, rating: 2.5, message: message})
    };

    //Loop through all the facets and create a Facet component
    return (<>
            <div className="scroll-col">
                <ul>
                    {data.map(x => <Review{...x}/>)}
                </ul>
            </div>
            <div>
                <input
                    type = "text"
                    id = "name"
                    name = "name"
                    onChange = {handleChange_name}
                    value = {name}
                />
                <input
                    type = "text"
                    id = "message"
                    name = "message"
                    onChange = {handleChange_message}
                    value = {message}
                />
                <button onClick = {handleClick}>Submit Review</button>
            </div>
        </>
    );
}

export default Review_container;