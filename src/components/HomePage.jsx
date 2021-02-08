import React from 'react';
import ArticleList from './ArticleList';
import ListOfTopics from './ListOfTopics';

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