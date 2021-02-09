import { Link } from '@reach/router';
import React from 'react';

const TopicsPage = ({topic}) => {
    return (
        <>
            <Link to="/">
                <h4>Home</h4>
            </Link>
        <div>
            <p>This is the {topic} page</p>
            </div>
        </>
    );
};

export default TopicsPage;