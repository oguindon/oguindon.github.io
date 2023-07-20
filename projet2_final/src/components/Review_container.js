import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Review from './Review';
import Row from 'react-bootstrap/esm/Row';
import "../App.css";

function Review_container({ data }) {
    //Loop through all the facets and create a Facet component
    return (<>
            <div className="scroll-col">
                <ul>
                    {data.map(x => <Review{...x}/>)}
                </ul>
            </div>
        </>
    );
}

export default Review_container;