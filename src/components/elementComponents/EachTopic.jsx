import { Link } from '@reach/router';
import React from 'react';

const EachTopic = ({ topic: { description, slug } }) => {
    return <li className="ListOfTopics__item">
        <Link to={`/nc-news-st/topics/${slug}`}>
            <p className="ListOfTopics__description">   {description}</p>
        </Link>
    </li>;
};

export default EachTopic;