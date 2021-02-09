import { Link } from '@reach/router';
import React from 'react';

const EachTopic = ({ topic: { description, slug } }) => {
    return <Link to={`/nc-news-st/topics/${slug}`}>
        <li className="ListOfTopics__item">
            <p className="ListOfTopics__description">   {description}</p>
        </li>
    </Link>;
};

export default EachTopic;