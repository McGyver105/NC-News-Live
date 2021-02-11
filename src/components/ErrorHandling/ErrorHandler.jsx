import { Link } from '@reach/router';
import React from 'react';
import './ErrorHandler.css'

const ErrorHandler = ({msg = 'wrong path', status = 404}) => {
    return (
        <>
            {
            msg === 'wrong path' ?
            <>
                <Link to="/nc-news-st">
                    <h4>Go Back</h4>
                </Link>
                <h2>Sorry, we couldn't find what you're looking for</h2>
                <h2>{msg}: {status}</h2>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Computer-kitten.jpg"
                    alt="error cat is on the case"
                    className="errorHandler"></img>
            </>
            :
            <>
                <h2>Sorry, we couldn't find what you're looking for</h2>
                <h2>{msg}: {status}</h2>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Computer-kitten.jpg"
                    alt="error cat is on the case"
                    className="errorHandler"></img>
            </>
            }
        </>
    );
};

export default ErrorHandler;