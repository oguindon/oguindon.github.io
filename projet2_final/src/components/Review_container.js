import React from 'react';
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/esm/Container';
import Review from './Review';
import Row from 'react-bootstrap/esm/Row';
import "../App.css";
import { addReview } from './Review_data';
import Rating from "@mui/material/Rating";

function Review_container({ data }) {
    const reviews = data[0];
    const id = data[1];
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [state, setState] = useState({
        currentReviews: reviews
    });
    const [rating, setRating] = useState('');


    const handleChange_message = (event) => {
        setMessage(event.target.value);
    };

    const handleChange_name = (event) => {
        setName(event.target.value);
    };

    const handleClick = () => {
        const rev = {name: name, rating: rating, message: message}
        addReview(id, rev);
        setState({...state, currentReviews: reviews})
    };

    useEffect(() => {
        setState({...state, currentReviews: reviews})
    }, [state.currentReviews])

    //Loop through all the facets and create a Facet component
    return (<>
            <div className="scroll-col">
                <ul>
                    {state.currentReviews.map(x => <Review{...x}/>)}
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
                <Rating
                    name="user-rating"
                    value={rating}
                    precision={0.5}
                    onChange={(event,newRating) => {
                        setRating(newRating);
                    }}
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