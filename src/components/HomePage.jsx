import React from 'react';
import ArticleList from './ArticleList';
import ListOfTopics from './ListOfTopics';
import '../Frontpage.css';
import { Link } from '@reach/router';

const HomePage = () => {
    return (
        <>
            <div className="homepage">
                <ArticleList />
                <ListOfTopics />
            </div>
        </>
    );
};

export default HomePage;