import React from 'react';

const EachTopic = ({topic: {description, slug}}) => {
    return <li className="ListOfTopics__item">
                <p className="ListOfTopics__slug">{slug}</p>
                <p className="ListOfTopics__description">{description}</p>
            </li>
};

export default EachTopic;